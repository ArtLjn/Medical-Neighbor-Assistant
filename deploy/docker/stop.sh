#!/bin/bash

if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi
# 停止 Docker 容器
docker-compose -p $COMPOSE_PROJECT_NAME stop