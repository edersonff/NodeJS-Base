FROM node:latest
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
EXPOSE 8080
CMD ["yarn","start"]