#!/bin/bash

# ROOT_PW=$(cat /run/secrets/Root_pw)

cd /app
if [ ! -d ./node_modules ]
then
	npm install
else
	echo " Wohooo Project is already set up"
fi
cd /

# echo "root:$ROOT_PW" | chpasswd
# sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config

/usr/sbin/sshd -D
