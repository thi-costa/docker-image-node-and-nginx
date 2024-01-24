# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the Nginx configuration file to the container
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the Nginx application files to the container
COPY . .

# Expose port 8080 for Nginx
EXPOSE 8080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
