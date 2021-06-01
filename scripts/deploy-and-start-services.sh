#!/bin/bash

echo "Removing containers"
sudo docker stop eureca-frontend alumni-site eureca-as eureca-backend alumni-backend apache
sudo docker rm eureca-frontend alumni-site eureca-as eureca-backend alumni-backend apache

echo "Starting containers"
bash start-eureca-frontend.sh
bash start-alumni-site.sh
bash start-eureca-as.sh
bash start-eureca-backend.sh
bash start-alumni-backend.sh
bash start-apache.sh
