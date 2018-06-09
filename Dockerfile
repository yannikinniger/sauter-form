FROM node:7.10 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000
#CMD ["nginx", "-g", "daemon off;"]
CMD nginx -g daemon off;