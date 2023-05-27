# Build
FROM node:20.2.0-alpine3.17 as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Run
FROM nginx:stable-alpine3.17 as production

ENV NODE_ENV production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]