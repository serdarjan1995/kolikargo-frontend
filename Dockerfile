FROM node:17-alpine3.14

RUN mkdir /app
WORKDIR /app
COPY ./ /app/
RUN yarn install --silent
ENV NODE_OPTIONS=--openssl-legacy-provider
# start app
CMD ["yarn", "start"]

EXPOSE 3000
