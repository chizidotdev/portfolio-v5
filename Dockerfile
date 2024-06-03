FROM node:21-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

ARG SECRET_SANITY_KEY
ARG PUBLIC_GOOGLE_TAG_ID
ARG PUBLIC_PAYSTACK_PUBLIC_KEY

COPY . .
RUN pnpm run build
RUN pnpm prune --production

FROM node:21-alpine AS runner
WORKDIR /app
COPY --from=builder /app/build build/
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
