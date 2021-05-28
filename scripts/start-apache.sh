#!/bin/bash

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

# Read configuration file

HTTP_PORT_PATTERN="http_port"
HTTP_PORT=$(grep $HTTP_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
HTTPS_PORT_PATTERN="https_port"
HTTPS_PORT=$(grep $HTTPS_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

APACHE_TAG_PATTERN="apache_tag"
APACHE_TAG=$(grep $APACHE_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${APACHE_TAG// } ]; then
        APACHE_TAG="latest"
fi

echo "Removing apache container"
sudo docker stop apache
sudo docker rm apache

# Start Apache
sudo docker pull fogbow/apache-shibboleth-server:$APACHE_TAG
sudo docker run -tdi --name apache \
      -p $HTTP_PORT:80 \
      -p $HTTPS_PORT:443 \
      -v $WORK_DIR/conf-files/apache/site.crt:/etc/ssl/certs/site.crt \
      -v $WORK_DIR/conf-files/apache/site.key:/etc/ssl/private/site.key \
      -v $WORK_DIR/conf-files/apache/site.pem:/etc/ssl/certs/site.pem \
      -v $WORK_DIR/conf-files/apache/ports.conf:/etc/apache2/ports.conf \
      -v $WORK_DIR/conf-files/apache/000-default.conf:/etc/apache2/sites-available/000-default.conf \
      fogbow/apache-shibboleth-server:$APACHE_TAG

# Start Apache
ENABLE_MODULES_SCRIPT="enable-modules"
APACHE_CONTAINER_NAME="apache"

echo "#!/bin/bash" > $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod ssl_load" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod proxy.load" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod proxy_http.load" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod shib2" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod ssl" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod rewrite" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod headers" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/a2enmod proxy_http" >> $ENABLE_MODULES_SCRIPT
echo "/usr/sbin/service apache2 restart" >> $ENABLE_MODULES_SCRIPT

sudo chmod +x $ENABLE_MODULES_SCRIPT
sudo docker cp $ENABLE_MODULES_SCRIPT $APACHE_CONTAINER_NAME:/$ENABLE_MODULES_SCRIPT
sudo docker exec $APACHE_CONTAINER_NAME /$ENABLE_MODULES_SCRIPT
sudo docker exec $APACHE_CONTAINER_NAME /bin/bash -c "rm /$ENABLE_MODULES_SCRIPT"
rm $ENABLE_MODULES_SCRIPT