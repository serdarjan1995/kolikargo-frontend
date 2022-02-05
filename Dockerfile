FROM node:17-alpine3.14

RUN mkdir /app
WORKDIR /app
COPY ./ /app/
RUN yarn install
CMD export NODE_OPTIONS=--openssl-legacy-provider && yarn start
