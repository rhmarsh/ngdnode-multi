FROM node:9.6.1
WORKDIR /app
COPY /angular .
RUN npm install
RUN npm run build-prod

FROM node:9.6.1
WORKDIR /server
COPY --from=0 /app/dist/index.html /server
RUN mkdir /server/atoh-docker
COPY --from=0 /app/dist /server/atoh-docker
COPY /server /server
RUN npm install
CMD npm run start-node