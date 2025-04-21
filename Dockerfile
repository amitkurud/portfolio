FROM oven/bun:alpine AS base

# Step 1 - install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Step 2 - rebuild the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Step 3 - copy all the files and run server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules

# Copy the package.json file from the base stage to the current directory in the release stage.
COPY --from=builder /app/package.json ./package.json

# Copy the .next folder from the base stage to the .next directory in the release stage.
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src/content ./src/content
EXPOSE 3000
CMD ["bun", "run", "start"]
