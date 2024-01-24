# Use the official Nginx image as the base image
FROM nginx:stable-alpine

# Copy the Nginx configuration file to the container
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for Nginx
EXPOSE 80

ENTRYPOINT [ "/docker-entrypoint.sh" ]

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
