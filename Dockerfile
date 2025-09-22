# Dockerfile para Next.js 15 - Optimizado para Coolify
FROM node:20-alpine AS base

# Instalar dependencias del sistema
RUN apk add --no-cache libc6-compat

# Instalar pnpm para mejor performance
RUN npm install -g pnpm

# Crear directorio de la aplicación
WORKDIR /app

# Copiar archivos de configuración
COPY package.json pnpm-lock.yaml* ./
COPY tailwind.config.js ./
COPY postcss.config.mjs ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar código fuente
COPY src ./src
COPY public ./public

# Construir la aplicación con output standalone
RUN pnpm run build

# Etapa de producción
FROM node:20-alpine AS runner

WORKDIR /app

# No ejecutar como root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios
COPY --from=base /app/public ./public
COPY --from=base --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=base --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar al usuario no privilegiado
USER nextjs

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Comando de inicio
CMD ["node", "server.js"]
