FROM node:24


RUN apt-get update -y && apt-get upgrade -y && \
	apt-get install -y  \
	zsh
	# openssh-server 

RUN mkdir  -p /var/run/sshd
EXPOSE 22
RUN echo 'PROMPT="%B%F{red}➜ %n%F@%F{cyan}%m%f: %F{yellow}%~%F{#00ff00} ❯❯%b%F{DEFAULT} "'>> /root/.zshrc

	
WORKDIR /app
RUN mkdir -p /init
RUN chsh -s $(which zsh) root
COPY ./init/init.sh /init/init.sh
RUN chmod +x /init/init.sh
ENTRYPOINT ["/init/init.sh"]

