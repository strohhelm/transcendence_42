FROM debian:12.11

RUN mkdir -p /node_libs
WORKDIR /node_libs

RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y curl  && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs

RUN npm init -y

RUN npm install fastify
ENV NODE_PATH=/node_libs/node_modules

ENTRYPOINT ["node", "/transcendence/server.js"]
