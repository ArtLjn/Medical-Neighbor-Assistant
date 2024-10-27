# 使用官方nginx镜像
FROM nginx:1.21.6

# 复制项目到容器中
COPY medhealth /root/medhealth

# 设置工作目录
WORKDIR /root/medhealth

# 复制nginx配置文件到容器内
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 8081
EXPOSE 8082
EXPOSE 8088
EXPOSE 8099

# 创建一个卷，用于共享config目录
VOLUME ["/root/medhealth/back/config"]

# 切换到back目录
WORKDIR /root/medhealth/back/

# 确保back文件具有执行权限
RUN chmod +x ./back

# 启动nginx和back进程
CMD ["bash", "-c", "nginx && ./back"]
