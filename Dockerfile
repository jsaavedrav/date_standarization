FROM node:14.21.3-alpine

COPY . .
RUN npm ci

ENV NODE_ENV = production
ENV NODE_MODULES_CACHE = true
ENV NODE_VERBOSE = false
ENV NPM_CONFIG_PRODUCTION = true

CMD [ "node", "server.js" ]
