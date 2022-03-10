FROM node:12.22-alpine

RUN mkdir -p /usr/src/app && chmod -R g+rw /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn install

COPY . .

EXPOSE 9000

CMD ["yarn", "start"]
