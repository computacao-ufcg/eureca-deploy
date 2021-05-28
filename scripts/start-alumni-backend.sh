#!/bin/bash

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

# Read configuration file

ALUMNI_PORT_PATTERN="alumni_port"
ALUMNI_PORT=$(grep $ALUMNI_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

ALUMNI_TAG_PATTERN="alumni_tag"
ALUMNI_TAG=$(grep $ALUMNI_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${ALUMNI_TAG// } ]; then
        ALUMNI_TAG="latest"
fi

# Stop and remove containers
echo "Removing alumni-backend container"
sudo docker stop alumni-backend
sudo docker rm alumni-backend

# Start Alumni Backend
sudo docker pull eureca/alumni-backend:$ALUMNI_TAG
sudo docker run -itd --name alumni-backend \
    -p $ALUMNI_PORT:8082 \
    -v $WORK_DIR/conf-files/alumni:/root/alumni-backend/src/main/resources/private \
    eureca/alumni-backend:$ALUMNI_TAG