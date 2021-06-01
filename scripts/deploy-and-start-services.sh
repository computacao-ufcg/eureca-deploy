#!/bin/bash

echo "Removing containers"
sudo docker stop eureca-frontend alumni-site eureca-as eureca-backend alumni-backend apache
sudo docker rm eureca-frontend alumni-site eureca-as eureca-backend alumni-backend apache

echo "Starting containers"

./scripts/start-eureca-as.sh

./scripts/start-eureca-backend.sh

./scripts/start-apache.sh

./scripts/start-alumni-site.sh

./scripts/start-eureca-frontend.sh

./scripts/start-alumni-backend.sh
