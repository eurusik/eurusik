# Build stage
FROM --platform=$BUILDPLATFORM node:18-alpine AS build

ARG TARGETPLATFORM
ARG BUILDPLATFORM

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies - this layer will be cached if package*.json unchanged
RUN npm ci --prefer-offline --no-audit

# Copy only necessary source files
COPY index.html postcss.config.js tailwind.config.js vite.config.js ./
COPY src ./src
COPY public ./public

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built application
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
