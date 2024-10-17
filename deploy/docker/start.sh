#!/bin/bash
# # ubuntu
# sudo apt install -y curl openssl
# # centos
# sudo yum install -y curl openssl openssl-devel
# 运行此脚本请确保自己环境中未运行fisco环境，避免端口占用，并且自己环境中配置了docker环境和docker-compose环境
#运行脚本 bash start.sh

# 加载 .env 文件
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# 定义绿色文本颜色的 ANSI 转义码
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# 打印加载的环境变量（用于调试）
echo -e "${GREEN}Project Name: $COMPOSE_PROJECT_NAME${NC}"
echo -e "${GREEN}MySQL Root Password: $MYSQL_ROOT_PASSWORD${NC}"
echo -e "${GREEN}Redis Port: $REDIS_REFLECT_PORT${NC}"
echo -e "${GREEN}Starting additional service with webase front port: $WEB_PORT${NC}"
# 使用环境变量启动 Docker Compose
docker-compose -p $COMPOSE_PROJECT_NAME up -d
if [ "$isok" -eq 0 ]; then
  sed -i 's/^isok=0$/isok=1/' .env
  echo -e "\033[31m Error: Just kidding with you,This is not an error,If you don't understand, you must not have passed level four,Ha Ha Ha,\n \tBut please thank Wang Haonan... \033[0m"
fi
echo "配置ipfs跨域中..."
docker exec ipfs_node ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://192.168.1.115:5001", "http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
docker exec ipfs_node ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST"]'
docker restart ipfs_node
echo "配置ipfs跨域完成"