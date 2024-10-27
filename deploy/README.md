## 禅道部署
docker pull hub.zentao.net/app/zentao:20.7.1
docker run --name zentao -p 8888:80 -p 43306:3306 -e MYSQL_INTERNAL=true  -d hub.zentao.net/app/zentao:20.7.1