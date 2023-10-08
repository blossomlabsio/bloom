#builder stage 

FROM node:slim AS builder

WORKDIR /bloom

COPY ./package.json .
RUN npm install

COPY . .
RUN npm run build 


#deploy stage

FROM nginx:alpine

COPY --from=builder /bloom/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

