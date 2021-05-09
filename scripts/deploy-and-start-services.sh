#!/bin/bash

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

# Read configuration file

AS_PORT_PATTERN="as_port"
AS_PORT=$(grep $AS_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
ALUMNI_PORT_PATTERN="alumni_port"
ALUMNI_PORT=$(grep $ALUMNI_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
FRONTEND_PORT_PATTERN="frontend_port"
FRONTEND_PORT=$(grep $FRONTEND_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
EURECA_PORT_PATTERN="eureca_port"
EURECA_PORT=$(grep $EURECA_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
ALUMNI_SITE_PORT_PATTERN="alumni_site_port"
ALUMNI_SITE_PORT=$(grep $ALUMNI_SITE_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
HTTP_PORT_PATTERN="http_port"
HTTP_PORT=$(grep $HTTP_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
HTTPS_PORT_PATTERN="https_port"
HTTPS_PORT=$(grep $HTTPS_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

AS_TAG_PATTERN="as_tag"
AS_TAG=$(grep $AS_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${AS_TAG// } ]; then
	AS_TAG="latest"
fi
ALUMNI_TAG_PATTERN="alumni_tag"
ALUMNI_TAG=$(grep $ALUMNI_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${ALUMNI_TAG// } ]; then
	ALUMNI_TAG="latest"
fi
FRONTEND_TAG_PATTERN="frontend_tag"
FRONTEND_TAG=$(grep $FRONTEND_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${FRONTEND_TAG// } ]; then
	FRONTEND_TAG="latest"
fi
EURECA_TAG_PATTERN="eureca_tag"
EURECA_TAG=$(grep $EURECA_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${EURECA_TAG// } ]; then
	EURECA_TAG="latest"
fi
ALUMNI_SITE_TAG_PATTERN="alumni_site_tag"
ALUMNI_SITE_TAG=$(grep $ALUMNI_SITE_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${ALUMNI_SITE_TAG// } ]; then
	ALUMNI_SITE_TAG="latest"
fi

echo "Removing containers"
sudo docker stop eureca-frontend alumni-site eureca-as eureca-backend alumni-backend apache
sudo docker rm eureca-frontend alumni-site eureca-as eureca-backend alumni-backend apache

echo "Creating containers"

# Start Eureca Frontend
sudo docker pull eureca/eureca-frontend:$FRONTEND_TAG
sudo docker run -itd --name eureca-frontend \
    -p $FRONTEND_PORT:3000 \
    -v $WORKDIR/conf-files/frontend/api.js:/app/src/services/api.js \
    eureca/eureca-frontend:$FRONTEND_TAG

# Start Alumni Site
sudo docker pull eureca/alumni-site:$ALUMNI_SITE_TAG
sudo docker run -itd --name alumni-site \
    -p $ALUMNI_SITE_PORT:3001 \
    -v $WORKDIR/conf-files/alumni-site/api.js:/app/src/services/api.js \
    eureca/alumni-site:$ALUMNI_SITE_TAG

# Start Eureca AS

sudo docker pull eureca/eureca-as:$AS_TAG
sudo docker run -itd --name eureca-as \
    -p $EAS_PORT:8080 \
    -v $WORKDIR/conf-files/as:/root/eureca-as/src/main/resources/private \
    eureca/eureca-as:$EURECA_TAG

AS_CONF_FILE_PATH="src/main/resources/private/as.conf"
sudo docker exec eureca-as /bin/bash -c "cat $BUILD_FILE_NAME >> $AS_CONF_FILE_PATH"
sudo docker exec eureca-as /bin/bash -c "./mvnw spring-boot:run -X > log.out 2> log.err" &

# Start Eureca Backend
sudo docker pull eureca/eureca-backend:$EURECA_TAG
sudo docker run -itd --name eureca-backend \
    -p $EURECA_PORT:8081 \
    -v $WORDIR/conf-files/eureca:/root/eureca-backend/src/main/resources/private \
    eureca/eureca-backend:$EURECA_TAG

docker exec eureca-backend /bin/bash -c "mvn spring-boot:run -X > log.out 2> log.err" &

# Start Alumni Backend
sudo docker pull eureca/alumni-backend:$ALUMNI_TAG
sudo docker run -itd --name alumni-backend \
    -p $ALUMNI_PORT:8082 \
    -v $WORKDIR/conf-files/alumni:/root/alumni-backend/src/main/resources/private \
    eureca/alumni-backend:$ALUMNI_TAG

docker exec alumni-backend /bin/bash -c "mvn spring-boot:run -X > log.out 2> log.err" &

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