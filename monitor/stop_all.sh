#!/bin/bash

# 杀死在 3030 端口上的服务
f3030=$(lsof -t -i:3030)
if [ -n "$f3030" ]; then
    kill -9 $f3030
    echo "Killed service on port 3030."
else
    echo "No service running on port 3030."
fi

# 杀死在 9090 端口上的服务
f9090=$(lsof -t -i:9090)
if [ -n "$f9090" ]; then
    kill -9 $f9090
    echo "Killed service on port 9090."
else
    echo "No service running on port 9090."
fi

docker stop dataexport
docker stop node-exporter