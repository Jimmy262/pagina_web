#!/bin/bash

# Script de construcción para Coolify
echo "🚀 Construyendo Consorcio Neptuno para despliegue..."

# Verificar si pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo "📦 Instalando pnpm..."
    npm install -g pnpm
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
pnpm install --frozen-lockfile

# Construir la aplicación
echo "🔨 Construyendo la aplicación..."
pnpm run build

# Verificar que la construcción fue exitosa
if [ $? -eq 0 ]; then
    echo "✅ Construcción completada exitosamente!"
    echo "📊 Tamaño de la carpeta .next/standalone:"
    du -sh .next/standalone
    echo "🌐 La aplicación está lista para desplegar en Coolify"
else
    echo "❌ Error en la construcción"
    exit 1
fi
