FROM node:14.14.0

WORKDIR /speedio_front

RUN npm install

COPY . .

CMD ["yarn", "serve"]