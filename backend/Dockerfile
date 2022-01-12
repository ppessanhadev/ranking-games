FROM node:14-slim

RUN npm install -g yarn

WORKDIR .

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn

CMD ["yarn", "dev"]