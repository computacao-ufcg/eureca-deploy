FROM alpine:latest
RUN apk add --no-cache nodejs npm yarn

WORKDIR .

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3333

ENTRYPOINT [ "./init.sh" ]