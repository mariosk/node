FROM node:8
COPY server.js ./
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js" ]
