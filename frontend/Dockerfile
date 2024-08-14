ARG NODE_VERSION=20-alpine3.20
FROM node:${NODE_VERSION}

LABEL authors="mkuch"

ARG PORT=3000
ARG HOST=0.0.0.0

ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=$HOST
ENV NUXT_ENV_SITE_BACKEND_URL=/

WORKDIR /app

COPY package*.json ./

RUN npm install --production=false

COPY . .

EXPOSE 3000

RUN npm run build
CMD [ "npm", "run", "start" ]
