FROM node:16.14-alpine

RUN mkdir /app
WORKDIR /app
COPY ./ /app/
RUN yarn install --silent
# start app
CMD ["yarn", "start"]

EXPOSE 3000
