FROM node:19-alpine AS x-node
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY vite.config.js /usr/src/app/vite.config.js
COPY svelte.config.js /usr/src/app/svelte.config.js
COPY src /usr/src/app/src/
RUN npm i
RUN npm i -g vite

FROM node:19-alpine AS x-web
WORKDIR /usr/src/app
COPY --from=x-node usr/src/app /usr/src/app/
ENV NODE_ENV='production'
ENV PROJECT='web'
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:vite"]

FROM node:19-alpine AS x-admin
WORKDIR /usr/src/app
COPY --from=x-node usr/src/app /usr/src/app/
ENV NODE_ENV='production'
ENV ADMIN='1'
ENV PROJECT='admin'
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:vite"]

FROM nginx:1.25.1-alpine-slim AS x-nginx
COPY nginx/prod.conf /etc/nginx/nginx.conf
EXPOSE 80 81
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]