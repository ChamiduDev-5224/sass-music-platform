FROM node:19.5.0-alpine
WORKDIR /src


COPY package.json .
RUN npm install --force

COPY . .

CMD npm run dev