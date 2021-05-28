#!/bin/bash

# Read configuration file

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

BACKEND_PORT_PATTERN="backend_port"
BACKEND_PORT=$(grep $BACKEND_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

BACKEND_TAG_PATTERN="backend_tag"
BACKEND_TAG=$(grep $BACKEND_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${BACKEND_TAG// } ]; then
        BACKEND_TAG="latest"
fi

echo "Removing eureca-backend container"
sudo docker stop eureca-backend
sudo docker rm eureca-backend

# Start Eureca Backend
sudo docker pull eureca/eureca-backend:$BACKEND_TAG
sudo docker run -itd --name eureca-backend \
    -p $BACKEND_PORT:8081 \
    -v $WORK_DIR/conf-files/backend:/root/eureca-backend/src/main/resources/private \
    eureca/eureca-backend:$BACKEND_TAG