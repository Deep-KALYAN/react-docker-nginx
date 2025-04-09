# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json .
RUN npm install


COPY . .
RUN npm run build

# Step 2: Serve the app with NGINX
FROM nginx:alpine

# Clean out default NGINX html
# RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Custom NGINX config (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# # Step 1: Build the React app
# FROM node:18 AS builder

# WORKDIR /app
# COPY . .

# RUN npm install
# RUN npm run build

# # Step 2: Serve the app with NGINX
# FROM nginx:alpine

# # Clean out default NGINX html
# RUN rm -rf /usr/share/nginx/html/*

# # Copy build output from previous stage
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Optional: Custom NGINX config (if needed)
# # COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
