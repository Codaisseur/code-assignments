FROM node:6.9
MAINTAINER Codaisseur <oss@codaisseur.com>

RUN mkdir /app
WORKDIR /app

ADD package.json /app

RUN npm install

ADD . /app

EXPOSE 5000
