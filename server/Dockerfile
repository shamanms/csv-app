FROM node:8

COPY . /server
WORKDIR /server

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3001

# Launch application
CMD ["npm","start"]