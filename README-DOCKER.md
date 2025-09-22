# 🚀 Despliegue en Coolify - Consorcio Neptuno

Este documento explica cómo desplegar la aplicación **Consorcio Neptuno** en **Coolify** usando Docker.

## 📋 Requisitos Previos

- Cuenta en [Coolify](https://coolify.io/)
- Git repository conectado a Coolify
- Dominio configurado (opcional)

## 🐳 Configuración Docker

### Archivos de Configuración

#### 1. **Dockerfile** (Producción)
```dockerfile
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
```

#### 2. **docker-compose.yml** (Recomendado para Coolify)
```yaml
version: '3.8'

services:
  consorcio-neptuno:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: consorcio-neptuno-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## 📝 Variables de Entorno

Crea un archivo `env.example` con las siguientes variables:

```bash
# Configuración de Next.js
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Configuración de la aplicación
NEXT_PUBLIC_APP_NAME="Consorcio Neptuno"
NEXT_PUBLIC_APP_DESCRIPTION="Constructora & Inmobiliaria S.a.C."

# Información de contacto
NEXT_PUBLIC_PHONE="998994969"
NEXT_PUBLIC_EMAIL="info@consorcioneptuno.com"
NEXT_PUBLIC_ADDRESS="Av. José Gálvez Nro. 1344 Int. 103, Santa Beatriz, Lima"

# Configuración de RUC y empresa
NEXT_PUBLIC_RUC="20600187121"
NEXT_PUBLIC_COMPANY_NAME="CONSORCIO NEPTUNO CONSTRUCTORA & INMOBILIARIA S.A.C."
NEXT_PUBLIC_FOUNDATION_DATE="2015-05-22"
```

## 🚀 Pasos para Desplegar en Coolify

### 1. **Conectar Repository**
1. Ve a tu panel de Coolify
2. Haz clic en **"New Project"**
3. Selecciona **"Git Repository"**
4. Conecta tu GitHub/GitLab repository
5. Selecciona la rama (generalmente `main` o `master`)

### 2. **Configurar Build Settings**
- **Build Method**: Docker
- **Dockerfile Path**: `./Dockerfile`
- **Node.js Version**: 20.x

### 3. **Variables de Entorno**
Agrega las variables de entorno necesarias en Coolify:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- Y cualquier otra variable personalizada

### 4. **Configurar Dominio (Opcional)**
1. Ve a **"Domains"** en tu proyecto
2. Agrega tu dominio personalizado
3. Configura SSL automáticamente

### 5. **Deploy**
1. Haz clic en **"Deploy"**
2. Coolify construirá la imagen Docker
3. Una vez completado, tu aplicación estará disponible

## 🔧 Comandos Útiles

### **Desarrollo Local**
```bash
# Usar Docker para desarrollo
docker-compose up --build

# O usar directamente
npm run dev
```

### **Construcción Manual**
```bash
# Construir para producción
npm run build

# Script de construcción
./build.sh
```

## 📊 Health Check

La aplicación incluye un health check básico. Puedes verificar que esté funcionando:

```bash
curl -f http://localhost:3000
```

## 🔍 Monitoreo

### **Logs en Coolify**
1. Ve a tu proyecto en Coolify
2. Haz clic en **"Logs"**
3. Selecciona el servicio

### **Métricas**
Coolify proporciona métricas básicas de CPU, memoria y disco.

## 🆘 Solución de Problemas

### **Error: Cannot apply unknown utility class**
- Asegúrate de que Tailwind CSS esté instalado
- Verifica que `tailwind.config.js` esté presente
- Reinicia el servidor de desarrollo

### **Error de construcción**
- Verifica que todas las dependencias estén instaladas
- Comprueba que la versión de Node.js sea compatible (20.x)
- Revisa los logs de construcción en Coolify

### **Aplicación no responde**
- Verifica el health check
- Revisa los logs del contenedor
- Asegúrate de que el puerto 3000 esté expuesto

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Coolify
2. Verifica la configuración de variables de entorno
3. Asegúrate de que el Dockerfile sea correcto
4. Consulta la documentación de Coolify

## 🎯 Características de la Aplicación

- ✅ **Next.js 15** con App Router
- ✅ **Tailwind CSS v4** para estilos
- ✅ **TypeScript** para desarrollo
- ✅ **Optimización de imágenes**
- ✅ **Responsive design**
- ✅ **SEO optimizado**
- ✅ **Standalone build** para Docker
- ✅ **Health check** incluido
- ✅ **Environment variables** configurables

## 🔄 Actualizaciones

Para actualizar la aplicación:
1. Push los cambios a tu repository
2. Coolify detectará automáticamente los cambios
3. Se reconstruirá automáticamente
4. El nuevo contenedor se desplegará

---
**¡Tu aplicación Consorcio Neptuno está lista para desplegar en Coolify!** 🎉
