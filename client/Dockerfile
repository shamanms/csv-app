FROM node:8

COPY . /client
WORKDIR /client

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD ["npm","start"]