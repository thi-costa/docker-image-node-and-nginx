# syntax=docker/dockerfile:1
FROM node:19.0.0-alpine3.16

WORKDIR /usr/src/app

COPY . .
RUN ls
RUN npm install

EXPOSE 8080

CMD ["node", "index.js"]

# FROM node:19.0.0-alpine3.16 AS builder

# # Definir WORKDIR
# WORKDIR /usr/src/app

# ADD . .

# # Use smaller image
# # FROM gcr.io/distroless/nodejs18-debian11

# # WORKDIR /usr/src/app
# # COPY --from=builder /usr/src/app/index.js .

# EXPOSE 8080

# CMD ["node", "index.js"]

# # Keep container running
# # ENTRYPOINT ["tail", "-f", "/dev/null"]
