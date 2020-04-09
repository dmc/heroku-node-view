FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/

RUN  npm -g config set registry http://registry.npmjs.org/
RUN  npm -g config set strict-ssl false

RUN npm install

COPY . /usr/src/app

EXPOSE 5000
CMD [ "npm", "start" ]