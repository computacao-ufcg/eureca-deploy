#!/bin/bash

EURECA_CONF_FILE_PATH="eureca.conf"

#PORTS

## Eureca Frontend Port
EF_PORT_PATTERN="EURECA_FRONTEND_PORT"
EF_PORT=$(grep $EF_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Alumni Site Port
ALUMNI_SITE_PORT_PATTERN="ALUMNI_SITE_PORT"
ALUMNI_SITE_PORT=$(grep $ALUMNI_SITE_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Eureca Authentication Service Port
EAS_PORT_PATTERN="EURECA_AS_PORT"
EAS_PORT=$(grep $EAS_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Eureca Backend Port
EB_PORT_PATTERN="EURECA_BACKEND_PORT"
EB_PORT=$(grep $EB_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Alumni Backend Port
AB_PORT_PATTERN="ALUMNI_BACKEND_PORT"
AB_PORT=$(grep $AB_PORT_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

#TAGS

## Eureca Frontend Tag
EF_TAG_PATTERN="EURECA_FRONTEND_TAG"
EF_TAG=$(grep $EF_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Aumni Site Tag
ALUMNI_SITE_TAG_PATTERN="ALUMNI_SITE_TAG"
ALUMNI_SITE_TAG=$(grep $ALUMNI_SITE_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Eureca Authentication Service Tag
EAS_TAG_PATTERN="EURECA_AS_TAG"
EAS_TAG=$(grep $EAS_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Eureca Backend Tag
EB_TAG_PATTERN="EURECA_BACKEND_TAG"
EB_TAG=$(grep $EB_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

## Alumni Backend Tag
AB_TAG_PATTERN="ALUMNI_BACKEND_TAG"
AB_TAG=$(grep $AB_TAG_PATTERN $EURECA_CONF_FILE_PATH | cut -d"=" -f2-)

echo "Removing containers"
sudo docker stop eureca-frontend-container alumni-site-container eureca-as-container eureca-backend-container alumni-backend-container 
sudo docker rm eureca-frontend-container alumni-site-container eureca-as-container eureca-backend-container alumni-backend-container

echo "Build Images and running containers"

# Start Frontend
## Eureca Frontend
echo "Build to eureca frontend:"
sudo docker pull eureca/eureca-frontend:$EF_TAG

echo "Creating Container"
sudo docker run -itd --name eureca-frontend-container \
    -p $EF_PORT:3000 \
    -v $(pwd)/services/eureca-frontend/api.js:/app/src/services/api.js \
    eureca/eureca-frontend:$EF_TAG

## Alumni Site
echo "Build to alumni site:"
sudo docker pull eureca/alumni-site:$ALUMNI_SITE_TAG

echo "Creating Container"
sudo docker run -itd --name alumni-site-container \
    -p $ALUMNI_SITE_PORT:3001 \
    -v $(pwd)/services/alumni-site/api.js:/app/src/services/api.js \
    eureca/alumni-site:$ALUMNI_SITE_TAG

#Start Backend

## Eureca Authentication Service
echo "Build to eureca as:"
sudo docker pull eureca/eureca-as:$EAS_TAG

echo "Creating Container"
sudo docker run -itd --name eureca-as-container \
    -p $EAS_PORT:8080 \
    -v ${HOME}/privates/private_eas/private:/root/eureca-as/src/main/resources/private \
    eureca/eureca-as:$EAS_TAG

## Eureca Backend
echo "Build to eureca backend:"
sudo docker pull eureca/eureca-backend:$EB_TAG

echo "Creating Container"
sudo docker run -itd --name eureca-backend-container \
    -p $EB_PORT:8081 \
    -v ${HOME}/privates/private_eb/private:/root/eureca-backend/src/main/resources/private \
    eureca/eureca-backend:$EB_TAG

## Alumni Backend
echo "Build to alumni backend:"
sudo docker pull eureca/alumni-backend:$AB_TAG

echo "Creating Container"
sudo docker run -itd --name alumni-backend-container \
    -p $AB_PORT:8082 \
    -v ${HOME}/privates/private_ab/private:/root/alumni-backend/src/main/resources/private \
    eureca/alumni-backend:$AB_TAG


# Start Services

docker exec -itd eureca-as-container /bin/bash -c "mvn spring-boot:run" &
docker exec -itd eureca-backend-container /bin/bash -c "mvn spring-boot:run" & 
docker exec -itd alumni-backend-container /bin/bash -c "mvn spring-boot:run"