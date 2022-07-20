# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# add `/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]