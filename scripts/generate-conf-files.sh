#!/bin/bash

# Source configuration files
CONF_FILES_DIR_PATH="../conf-files"
TEMPLATES_DIR_PATH="../templates"
HOST_CONF_FILE_PATH=$CONF_FILES_DIR_PATH/"host.conf"
SERVICE_CONF_FILE_PATH=$CONF_FILES_DIR_PATH/"service.conf"
AS_CONF_FILE_PATH=$CONF_FILES_DIR_PATH/"as.conf"
ALUMNI_CONF_FILE_PATH=$CONF_FILES_DIR_PATH/"alumni.conf"
BACKEND_CONF_FILE_PATH=$CONF_FILES_DIR_PATH/"backend.conf"

# Reading configuration files

## Reading data from service.conf
### Service ports configuration
AS_PORT_PATTERN="as_port"
AS_PORT=$(grep $AS_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
ALUMNI_PORT_PATTERN="alumni_port"
ALUMNI_PORT=$(grep $ALUMNI_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
FRONTEND_PORT_PATTERN="frontend_port"
FRONTEND_PORT=$(grep $FRONTEND_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
BACKEND_PORT_PATTERN="backend_port"
BACKEND_PORT=$(grep $BACKEND_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
ALUMNI_SITE_PORT_PATTERN="alumni_site_port"
ALUMNI_SITE_PORT=$(grep $ALUMNI_SITE_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
HTTP_PORT_PATTERN="http_port"
HTTP_PORT=$(grep $HTTP_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
HTTPS_PORT_PATTERN="https_port"
HTTPS_PORT=$(grep $HTTPS_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
### Service tags configuration
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
FRONTEND_PORT_TAG_PATTERN="frontend_tag"
FRONTEND_PORT_TAG=$(grep $FRONTEND_PORT_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${FRONTEND_PORT_TAG// } ]; then
	FRONTEND_PORT_TAG="latest"
fi
BACKEND_TAG_PATTERN="backend_tag"
BACKEND_TAG=$(grep $BACKEND_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${BACKEND_TAG// } ]; then
	BACKEND_TAG="latest"
fi
ALUMNI_SITE_TAG_PATTERN="alumni_site_tag"
ALUMNI_SITE_TAG=$(grep $ALUMNI_SITE_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${ALUMNI_SITE_TAG// } ]; then
	ALUMNI_SITE_TAG="latest"
fi

### Demo user password
DEMO_USER_PASSWORD_PATTERN="demo_user_password"
DEMO_USER_PASSWORD=$(grep $DEMO_USER_PASSWORD_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${DEMO_USER_PASSWORD// } ]; then
	DEMO_USER_PASSWORD="demo"
fi

### Eureca tables directory
BACKEND_TABLES_DIR_PATTERN="tables"
BACKEND_TABLES_DIR=$(grep $BACKEND_TABLES_DIR_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

## Reading data from host.conf
SERVICE_HOST_IP_PATTERN="service_host_ip"
SERVICE_HOST_IP=$(grep $SERVICE_HOST_IP_PATTERN $HOST_CONF_FILE_PATH | cut -d"=" -f2-)
HOST_FQDN_PATTERN="service_host_FQDN"
HOST_FQDN=$(grep $HOST_FQDN_PATTERN $HOST_CONF_FILE_PATH | cut -d"=" -f2-)

# Creating temporary directory
mkdir -p ./tmp/conf-files

# Ports and tags conf-file generation
PORTS_TAGS_CONF_FILE_PATH="./tmp/conf-files/service.conf"
touch $PORTS_TAGS_CONF_FILE_PATH

echo "$AS_PORT_PATTERN=$AS_PORT" > $PORTS_TAGS_CONF_FILE_PATH
echo "$ALUMNI_PORT_PATTERN=$ALUMNI_PORT" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$FRONTEND_PORT_PATTERN=$FRONTEND_PORT" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$BACKEND_PORT_PATTERN=$BACKEND_PORT" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$ALUMNI_SITE_PORT_PATTERN=$ALUMNI_SITE_PORT" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$HTTP_PORT_PATTERN=$HTTP_PORT" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$HTTPS_PORT_PATTERN=$HTTPS_PORT" >> $PORTS_TAGS_CONF_FILE_PATH

echo "$AS_TAG_PATTERN=$AS_TAG" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$ALUMNI_TAG_PATTERN=$ALUMNI_TAG" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$FRONTEND_PORT_TAG_PATTERN=$FRONTEND_PORT_TAG" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$BACKEND_TAG_PATTERN=$BACKEND_TAG" >> $PORTS_TAGS_CONF_FILE_PATH
echo "$ALUMNI_SITE_TAG_PATTERN=$ALUMNI_SITE_TAG" >> $PORTS_TAGS_CONF_FILE_PATH

# AS conf-file generation
## Setting AS variables
AS_DIR_PATH="./tmp/conf-files/as"
AS_CONF_FILE_NAME="as.conf"
AS_CONTAINER_CONF_FILE_DIR_PATH="/root/eureca-as/src/main/resources/private"
AS_PRIVATE_KEY_PATH=$AS_DIR_PATH/"id_rsa"
AS_PUBLIC_KEY_PATH=$AS_DIR_PATH/"id_rsa.pub"
AS_RSA_KEY_PATH=$AS_DIR_PATH/"rsa_key.pem"
## Creating directory
mkdir -p $AS_DIR_PATH
cp $AS_CONF_FILE_PATH $AS_DIR_PATH/$AS_CONF_FILE_NAME

## Adding user names with admin role and provider ID
echo "admin=as_admin" >> $AS_DIR_PATH/$AS_CONF_FILE_NAME
echo "provider_id="$HOST_FQDN >> $AS_DIR_PATH/$AS_CONF_FILE_NAME

## Creating and adding key pair
echo "" >> $AS_DIR_PATH/$AS_CONF_FILE_NAME
openssl genrsa -out $AS_RSA_KEY_PATH 1024
openssl pkcs8 -topk8 -in $AS_RSA_KEY_PATH -out $AS_PRIVATE_KEY_PATH -nocrypt
openssl rsa -in $AS_PRIVATE_KEY_PATH -outform PEM -pubout -out $AS_PUBLIC_KEY_PATH
chmod 600 $AS_PRIVATE_KEY_PATH
rm $AS_RSA_KEY_PATH
echo "public_key_file_path="$AS_CONTAINER_CONF_FILE_DIR_PATH/"id_rsa.pub" >> $AS_DIR_PATH/$AS_CONF_FILE_NAME
echo "private_key_file_path="$AS_CONTAINER_CONF_FILE_DIR_PATH/"id_rsa" >> $AS_DIR_PATH/$AS_CONF_FILE_NAME

## Creating users DB
DB_FILE_NAME="users.db"
touch $AS_DIR_PATH/$DB_FILE_NAME
chmod 600 $AS_DIR_PATH/$DB_FILE_NAME
AS_ADMIN_PASSWORD=$(pwgen 10 1)
AS_USER_PASSWORD=$(pwgen 10 1)
ADMIN_USER_NAME="as_admin"
AS_USER_NAME="as_user"
DEMO_USER_NAME="demo"
echo $ADMIN_USER_NAME","$AS_ADMIN_PASSWORD > $AS_DIR_PATH/$DB_FILE_NAME
echo $AS_USER_NAME","$AS_USER_PASSWORD >> $AS_DIR_PATH/$DB_FILE_NAME
echo $DEMO_USER_NAME","$DEMO_USER_PASSWORD >> $AS_DIR_PATH/$DB_FILE_NAME

# ALUMNI conf-file generation
## Setting ALUMNI variables
ALUMNI_DIR_PATH="./tmp/conf-files/alumni"
ALUMNI_CONF_FILE_NAME="alumni.conf"
ALUMNI_CONTAINER_CONF_FILE_DIR_PATH="/root/alumni-backend/src/main/resources/private"
ALUMNI_PRIVATE_KEY_PATH=$ALUMNI_DIR_PATH/"id_rsa"
ALUMNI_PUBLIC_KEY_PATH=$ALUMNI_DIR_PATH/"id_rsa.pub"
ALUMNI_RSA_KEY_PATH=$ALUMNI_DIR_PATH/"rsa_key.pem"

## Creating directory
mkdir -p $ALUMNI_DIR_PATH
cp $ALUMNI_CONF_FILE_PATH $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
chmod 600 $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME

## Adding properties
echo "as_url=$PROTOCOL$SERVICE_HOST_IP" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "as_port=$AS_PORT" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "backend_url=$PROTOCOL$SERVICE_HOST_IP" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "backend_port=$BACKEND_PORT" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "username="$AS_USER_NAME >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "password="$AS_USER_PASSWORD >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME

## Creating and adding key pair
echo "" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
openssl genrsa -out $ALUMNI_RSA_KEY_PATH 2048
openssl pkcs8 -topk8 -in $ALUMNI_RSA_KEY_PATH -out $ALUMNI_PRIVATE_KEY_PATH -nocrypt
openssl rsa -in $ALUMNI_PRIVATE_KEY_PATH -outform PEM -pubout -out $ALUMNI_PUBLIC_KEY_PATH
chmod 600 $ALUMNI_PRIVATE_KEY_PATH
rm $ALUMNI_RSA_KEY_PATH
echo "alumni_publickey="$ALUMNI_CONTAINER_CONF_FILE_DIR_PATH/"id_rsa.pub" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME
echo "alumni_privatekey="$ALUMNI_CONTAINER_CONF_FILE_DIR_PATH/"id_rsa" >> $ALUMNI_DIR_PATH/$ALUMNI_CONF_FILE_NAME

## Copying configuration files
cp -f $CONF_FILES_DIR_PATH/"alumni/school.input"  $ALUMNI_DIR_PATH

# Eureca conf-file generation
BACKEND_DIR_PATH="./tmp/conf-files/backend"
BACKEND_CONF_FILE_NAME="backend.conf"
BACKEND_CONTAINER_CONF_FILE_DIR_PATH="/root/eureca-backend/src/main/resources/private"
BACKEND_PRIVATE_KEY_PATH=$BACKEND_DIR_PATH/"id_rsa"
BACKEND_PUBLIC_KEY_PATH=$BACKEND_DIR_PATH/"id_rsa.pub"
BACKEND_RSA_KEY_PATH=$BACKEND_DIR_PATH/"rsa_key.pem"

## Creating directory
mkdir -p $BACKEND_DIR_PATH
cp $BACKEND_CONF_FILE_PATH $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME
chmod 600 $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME

## Adding properties
echo "as_url=$PROTOCOL$SERVICE_HOST_IP" >> $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME
echo "as_port=$AS_PORT" >> $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME

## Creating and adding key pair
echo "" >> $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME
openssl genrsa -out $BACKEND_RSA_KEY_PATH 2048
openssl pkcs8 -topk8 -in $BACKEND_RSA_KEY_PATH -out $BACKEND_PRIVATE_KEY_PATH -nocrypt
openssl rsa -in $BACKEND_PRIVATE_KEY_PATH -outform PEM -pubout -out $BACKEND_PUBLIC_KEY_PATH
chmod 600 $BACKEND_PRIVATE_KEY_PATH
rm $BACKEND_RSA_KEY_PATH
echo "eureca_publickey="$BACKEND_CONTAINER_CONF_FILE_DIR_PATH/"id_rsa.pub" >> $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME
echo "eureca_privatekey="$BACKEND_CONTAINER_CONF_FILE_DIR_PATH/"id_rsa" >> $BACKEND_DIR_PATH/$BACKEND_CONF_FILE_NAME

## Copying configuration files
cp -f $CONF_FILES_DIR_PATH/"backend/maps.conf" $BACKEND_DIR_PATH
mkdir -p $BACKEND_DIR_PATH/tables
cp -f $BACKEND_TABLES_DIR/* $BACKEND_DIR_PATH/tables

# FRONTEND conf-file generation
FRONTEND_DIR_PATH="./tmp/conf-files/frontend"
mkdir -p $FRONTEND_DIR_PATH
## Copying configuration files
cp -f $CONF_FILES_DIR_PATH/"frontend/api.js" $FRONTEND_DIR_PATH

# ALUMNI-SITE conf-file generation
ALUMNI_SITE_DIR_PATH="./tmp/conf-files/alumni-site"
mkdir -p $ALUMNI_SITE_DIR_PATH
## Copying configuration files
cp -f $CONF_FILES_DIR_PATH/"alumni-site/api.js" $ALUMNI_SITE_DIR_PATH

# Apache conf-file generation
## Setting apache variables
APACHE_DIR_PATH="./tmp/conf-files/apache"
APACHE_VHOST_FILE_NAME="000-default.conf"
CERTIFICATE_FILE_PATH=$CONF_FILES_DIR_PATH/"certs/site.crt"
CERTIFICATE_KEY_FILE_PATH=$CONF_FILES_DIR_PATH/"certs/site.key"
CERTIFICATE_CHAIN_FILE_PATH=$CONF_FILES_DIR_PATH/"certs/site.pem"

## Creating directory
mkdir -p $APACHE_DIR_PATH

## Copying certificate files
cp -f $CERTIFICATE_FILE_PATH $APACHE_DIR_PATH
cp -f $CERTIFICATE_KEY_FILE_PATH $APACHE_DIR_PATH
cp -f $CERTIFICATE_CHAIN_FILE_PATH $APACHE_DIR_PATH

## Copying ports.conf
cp -f $CONF_FILES_DIR_PATH/"apache/ports.conf" $APACHE_DIR_PATH

## Generating Virtual Host file
cp -f $TEMPLATES_DIR_PATH/$APACHE_VHOST_FILE_NAME $APACHE_DIR_PATH
sed -i "s|$SERVICE_HOST_IP_PATTERN|$SERVICE_HOST_IP|g" $APACHE_DIR_PATH/$APACHE_VHOST_FILE_NAME
sed -i "s|$HOST_FQDN_PATTERN|$HOST_FQDN|g" $APACHE_DIR_PATH/$APACHE_VHOST_FILE_NAME
sed -i "s|$FRONTEND_PORT_PATTERN|$FRONTEND_PORT|g" $APACHE_DIR_PATH/$APACHE_VHOST_FILE_NAME
sed -i "s|$SITE_PORT_PATTERN|$SITE_PORT|g" $APACHE_DIR_PATH/$APACHE_VHOST_FILE_NAME
rm -f $APACHE_DIR_PATH/sed*

# Copying deploy-and-start-services.sh
DEPLOY_START_SERVICES_FILE_NAME="deploy-and-start-services.sh"
cp $DEPLOY_START_SERVICES_FILE_NAME ./tmp/$DEPLOY_START_SERVICES_FILE_NAME
