# syntax=docker/dockerfile:1
FROM node:19.0.0-alpine3.16 AS build-env

WORKDIR /usr/src/app

COPY . .
RUN npm install --omit=dev

# Use smaller image
FROM gcr.io/distroless/nodejs18-debian11

COPY --from=build-env /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build-env /usr/src/app/index.js /usr/src/app

WORKDIR /usr/src/app
EXPOSE 8080
CMD ["index.js"]
