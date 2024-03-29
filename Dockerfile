# develop stage
FROM node:14.20.0 as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli@2.0.0
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm install
RUN quasar build
# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

