#!/bin/bash

EURECA_CONF_FILE_PATH="eureca.conf"

APP_PORT_PATTERN="App_port"
APP_PORT=$(grep $APP_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

API_PORT_PATTERN="Api_port"
API_PORT=$(grep $API_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)


APP_TAG_PATTERN="App_tag"
APP_TAG=$(grep $APP_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

API_TAG_PATTERN="Api_tag"
API_TAG=$(grep $API_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

echo "Removendo containers"
sudo docker stop pdc-app pdc-api
sudo docker rm pdc-app pdc-api

echo "Build e criação de containers"
echo "Build do front"
sudo docker pull eureca/pdc-app:$APP_TAG

echo  "Criando container"
sudo docker run -itd --name pdc-app \
    -p $APP_PORT:3000 \
    -v $(pwd)/api.js:/app/src/services/api.js \
    eureca/pdc-app:$APP_TAG

echo "Build do back"
sudo docker pull eureca/pdc-api:$API_TAG

echo "criando container"
sudo docker run -itd --name pdc-api \
    -p $API_PORT:5000 \
    -v $(pwd)/db.properties:/api/connection/db.properties \
    eureca/pdc-api:$API_TAG

