FROM node:12
RUNnpm i -g @quasar/cli
RUN npm install -g http-server
WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . .
RUN quasar build
EXPOSE 80
CMD [ "http-server", "dist" ]

