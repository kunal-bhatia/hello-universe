FROM node:8
EXPOSE 9000

WORKDIR /app

COPY package.json index.js /

RUN npm install

CMD ["npm", "start"]
