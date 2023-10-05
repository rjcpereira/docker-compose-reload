# docker-compose-reload

Docker Compose with hot reload (nodemon & sveltekit)

## Development

`npm run dev` or `docker-compose up --build`

### Clear containers

`npm run clear` or `docker-compose down --remove-orphans`
## Docker

```sh
docker build --no-cache-filter test --target x-nginx --tag x-nginx .
docker build --no-cache-filter test --target x-web --tag x-web .
docker build --no-cache-filter test --target x-admin --tag x-admin .

docker run -it x-web
docker run -it x-admin
docker run -it x-nginx
```