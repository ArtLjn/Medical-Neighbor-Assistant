#!/bin/bash

# 停止并删除现有的容器
docker rm -f medhealth

# 删除现有的镜像
docker image rm -f medhealth:v1

# 构建新的镜像
docker buildx build -t medhealth:v1 -f Dockerfile .

# 运行新的容器
docker run -it --name=medhealth -p 8081:8081 -p 8082:8082 -p 8088:8088 -p 8099:8099 -d medhealth:v1

docker logs -f medhealth 
