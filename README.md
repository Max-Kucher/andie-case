# Andy case website application

Frontend: nuxt
Backend: strapi
Proxies: Nginx for internal network + Traefic as reverse proxy


#### Run application in docker locally:
```shell
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```

##### If you need to run production variant:
```shell
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.proxy.yml up --build
```
