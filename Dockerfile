# Use the official Ubuntu 22.04 image as a parent image
FROM ubuntu:22.04

# Set the working directory
WORKDIR /usr/src/app

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000 to access server
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
