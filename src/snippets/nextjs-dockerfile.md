---
title: Next.js Dockerfile
description: Custom multistage Dockerfile for smaller image sizes in Next.js applications.
date: 2024-04-11T00:00:00.000Z
published: true
---

First, change the output method in the `next.config.js` file to use the `standalone` mode. This will reduce the size of the image by removing unnecessary files/dependencies.

```diff
const nextConfig = {
+  output: "standalone",
  ...
};
```

Next, create a custom `Dockerfile` to build the image. Go over the steps to make sure it matches your use case.

```Dockerfile
FROM node:21-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

# Copy only the files needed to install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies with the preferred package manager
RUN \
  if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi



FROM node:21-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the files
COPY . .

# Run build with the preferred package manager
RUN npm i -g pnpm && pnpm build



FROM node:21-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Add nextjs user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"



CMD ["node", "server.js"]
```
