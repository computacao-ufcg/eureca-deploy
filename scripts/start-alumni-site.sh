#!/bin/bash

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

# Read configuration file

ALUMNI_SITE_PORT_PATTERN="alumni_site_port"
ALUMNI_SITE_PORT=$(grep $ALUMNI_SITE_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

ALUMNI_SITE_TAG_PATTERN="alumni_site_tag"
ALUMNI_SITE_TAG=$(grep $ALUMNI_SITE_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${ALUMNI_SITE_TAG// } ]; then
        ALUMNI_SITE_TAG="latest"
fi

echo "Removing alumni-site container"
sudo docker stop alumni-site
sudo docker rm alumni-site

# Start Alumni Site
sudo docker pull eureca/alumni-site:$ALUMNI_SITE_TAG
sudo docker run -itd --name alumni-site \
    -p $ALUMNI_SITE_PORT:3001 \
    -v $WORK_DIR/conf-files/alumni-site/api.js:/root/alumni-site/src/services/api.js \
    -v $WORK_DIR/conf-files/alumni-site/login.js:/root/alumni-site/src/services/login.js \
    eureca/alumni-site:$ALUMNI_SITE_TAG