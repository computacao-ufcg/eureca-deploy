#!/bin/bash

EURECA_CONF_FILE_PATH="eureca.conf"

APP_TAG_PATTERN="App_tag"
APP_TAG=$(grep $APP_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

API_TAG_PATTERN="Api_tag"
API_TAG=$(grep $API_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

# Remove containers from earlier installation
sudo docker stop pdc-app pdc-api
sudo docker rm pdc-app pdc-api

# Create containers
sudo docker pull eureca/pdc-app:$APP_TAG
sudo docker run -itd --name pdc-app \
    -p $APP_PORT:3000 \
    pdc-app:$APP_TAG

sudo docker pull eureca/pdc-api:$API_TAG
sudo docker run -itd --name pdc-api \
    -p $API_PORT:5000 \
    -v $(pwd)/db.properties:/api/connection/db.properties \
    pdc-api:$API_TAG

