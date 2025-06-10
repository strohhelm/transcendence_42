FROM debian:12.11


RUN apt-get update -y && apt-get upgrade -y && \
	apt-get install -y curl  && \
	curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
	apt-get install -y \
		nodejs \
		openssh-server

WORKDIR /init
RUN mkdir /var/run/sshd
EXPOSE 22


COPY ./init/init.sh ./init.sh
RUN chmod +x init.sh
ENTRYPOINT ["./init.sh"]
