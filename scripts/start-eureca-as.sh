#!/bin/bash

BUILD_FILE_NAME="build"
WORK_DIR=$(pwd)
SERVICE_CONF_FILE_PATH="./conf-files/service.conf"

# Read configuration file

AS_PORT_PATTERN="as_port"
AS_PORT=$(grep $AS_PORT_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)

AS_TAG_PATTERN="as_tag"
AS_TAG=$(grep $AS_TAG_PATTERN $SERVICE_CONF_FILE_PATH | cut -d"=" -f2-)
if [ -z ${AS_TAG// } ]; then
        AS_TAG="latest"
fi

echo "Removing eureca-as container"
sudo docker stop eureca-as
sudo docker rm eureca-as

# Start Eureca AS
sudo docker pull eureca/eureca-as:$AS_TAG
sudo docker run -itd --name eureca-as \
    -p $AS_PORT:8080 \
    -v $WORK_DIR/conf-files/as:/root/eureca-as/src/main/resources/private \
    eureca/eureca-as:$AS_TAG
