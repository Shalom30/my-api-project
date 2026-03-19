#use official node image
FROM node:18

# set working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files
COPY . .

# expose port
EXPOSE 3000

# run the app
CMD ["node", "server.js"]
