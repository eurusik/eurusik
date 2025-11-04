# Build stage
FROM --platform=$BUILDPLATFORM node:20-alpine AS build

ARG TARGETPLATFORM
ARG BUILDPLATFORM

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies with BuildKit cache mount for npm cache
RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline --no-audit

# Copy only necessary source files
COPY index.html postcss.config.js tailwind.config.js vite.config.js ./
COPY src ./src
COPY public ./public
COPY scripts ./scripts

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install production dependencies only with cache mount
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --prefer-offline --no-audit

# Copy server file
COPY server.js ./

# Copy built static files from build stage
COPY --from=build /app/dist/client ./dist/client

# Expose ports (3001 for API, 80 for static files via Nginx sidecar or separate service)
EXPOSE 3001

# Start Node.js server
CMD ["node", "server.js"]
