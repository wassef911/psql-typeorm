
FROM node:14.5-alpine

ARG POSTGRES_HOST=${POSTGRES_HOST}
ARG POSTGRES_PORT=${POSTGRES_PORT}
ARG POSTGRES_USER=${POSTGRES_USER}
ARG POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ARG POSTGRES_DATABASE=${POSTGRES_DATABASE}

RUN apk add --update --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    && apk del .gyp

COPY package*.json ./ 

RUN npm ci  && mkdir /app && mv ./node_modules ./app 

WORKDIR /app 

COPY . /app 

EXPOSE 3000

CMD ["npm", "start"]
