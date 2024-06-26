FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "nodeapp.js"]
EXPOSE 8000

