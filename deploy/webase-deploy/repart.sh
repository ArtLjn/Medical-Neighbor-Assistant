#!/bin/bash
python3 deploy.py stopAll
rm -rf nodes
rm -rf h2
bash build_chain.sh -l 127.0.0.1:2 -p 30300,20200,8545 -e ./fisco-bcos
# 删除数据库
docker exec -i webase-mysql mysql -u root -p123456 -e "DROP DATABASE IF EXISTS webasenodemanager; DROP DATABASE IF EXISTS webasesign;"

# 创建数据库
docker exec -i webase-mysql mysql -u root -p123456 -e "CREATE DATABASE webasenodemanager; CREATE DATABASE webasesign;"

cd /root/webase-deploy/webase-node-mgr/script/ || exit

bash webase.sh 127.0.0.1 33306

cd /root/webase-deploy/ || exit

cp -f ./nodes/127.0.0.1/sdk/* ./webase-front/conf/

source /etc/profile

python3 deploy.py startAll

docker-compose -f /home/ubuntu/deploy/docker/docker-compose.yaml down
nohup docker-compose -f /home/ubuntu/deploy/docker/docker-compose.yaml up > nohup.log 2>&1 &

vim /home/ubuntu/deploy/local/medhealth/back/config/config.yaml
