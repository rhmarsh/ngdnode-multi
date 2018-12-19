FROM node:9.6.1
WORKDIR /server/app
COPY /angular /server/app
RUN npm install
RUN npm run build-prod
RUN rm -rf /server/app/node_modules

RUN mv /server/app/dist/index.html /server
RUN mkdir /server/dist
RUN mv /server/app/dist /server/
COPY /server /server
RUN rm -rf /server/app && rm -rf /server/dist/index.html
WORKDIR /server
RUN npm install
CMD npm run start-node