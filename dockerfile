FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install
RUN npm install express --save
RUN useradd -md /bin/bash local

ADD . /usr/src/app/

EXPOSE 5000
CMD [ "npm", "start" ]
