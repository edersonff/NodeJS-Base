FROM node:16-alpine
WORKDIR /usr/desafio
COPY . /usr/desafio
EXPOSE 8080
RUN yarn install \
&& yarn build \
&& rm -rf node_modules \
&& yarn install --production \
&& npx prisma generate
CMD ["yarn","start"]