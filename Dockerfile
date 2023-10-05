
FROM node:19-alpine AS x-vite
WORKDIR /app
COPY . .
RUN npm i
RUN npm i -g vite
ENV NODE_ENV='production'
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:vite"]

FROM nginx:1.25.1-alpine-slim AS x-nginx
COPY ./nginx/ ./etc/nginx/
EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]