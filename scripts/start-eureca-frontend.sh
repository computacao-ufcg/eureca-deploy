#!/bin/bash

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

FRONTEND_PORT_PATTERN="frontend_port"
FRONTEND_PORT=$(grep $FRONTEND_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

FRONTEND_TAG_PATTERN="frontend_tag"
FRONTEND_TAG=$(grep $FRONTEND_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${FRONTEND_TAG// } ]; then
        FRONTEND_TAG="latest"
fi

sudo docker stop eureca-frontend
sudo docker rm eureca-frontend

# Start Eureca Frontend
sudo docker pull eureca/eureca-frontend:$FRONTEND_TAG
sudo docker run -itd --name eureca-frontend \
    -p $FRONTEND_PORT:3000 \
    -v $WORK_DIR/conf-files/frontend/api.js:/root/eureca-frontend/src/services/api.js \
    eureca/eureca-frontend:$FRONTEND_TAG