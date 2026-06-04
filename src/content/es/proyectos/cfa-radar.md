---
title: "CFA Trending (CFA Radar)"
date: 2026-05-21
tag: "Dashboard"
description: "Dashboard interno para monitorear y analizar tendencias de TikTok, con sync a Apify, agregaciones semanales y auth segura."
draft: false
image: "https://i.ibb.co/Gfyz0ZPh/Captura-de-pantalla-2026-05-21-164132.png"
country: "Colombia"
---

**Contexto:** El equipo de comunicaciones necesitaba detectar tendencias reales de TikTok (hashtags, palabras, cuentas, audios, temas y videos) sin depender de "ver qué aparece en el feed", y además poder comparar semana a semana con un historial auditable.

---

## El desafío

Pasar de un proceso manual y subjetivo a un radar confiable con datos, filtros y consistencia.

| Antes | Después |
|---|---|
| Alguien revisaba el feed "a ojo" | Datos estructurados por keyword |
| Sin historial ni trazabilidad | Cada sync tiene un syncId auditable |
| Métricas imposibles de comparar | Agregaciones semanales automáticas |
| Dependencia de una persona | Dashboard accesible para todo el equipo |

---

## El resultado

Una app interna tipo dashboard que centraliza el análisis de tendencias:

- Sincroniza datos por keywords desde Apify
- Normaliza y persiste el dataset en PostgreSQL
- Calcula agregaciones y métricas semanales listas para consumo
- Protege el acceso con JWT + cookie HTTP-only

---

## ¿Qué es y qué hace?

CFA-Trending (también llamado CFA Radar) es una aplicación interna construida para monitorear contenido en tendencia de TikTok dentro de un foco de interés definido (sector/keywords).

| Componente | Descripción |
|---|---|
| weeklyMetrics | Volumen, comportamiento, señales de crecimiento |
| trendingHashtags | Hashtags con mayor tracción |
| trendingWords | Palabras clave emergentes |
| accountsTable | Cuentas que están ganando tracción |
| trendingTopics | Temas "hot" del período |
| trendingAudios | Audios en tendencia |
| featuredVideos | Videos destacados para inspiración |

---

## ¿Cómo funciona?

### Login y control de acceso

El usuario inicia sesión desde la UI. La API valida credenciales (variables de entorno). Si son correctas firma un JWT, lo guarda como cookie auth HTTP-only. Un middleware protege rutas — sin cookie válida redirige a /login.

### Sincronización y versionado por lotes

- sync=false — lee el último lote existente
- sync=true o sin datos previos — consulta Apify, transforma items crudos a CleanVideo, guarda en DB con un syncId único

### Agregaciones para el dashboard

Con el último syncId se calculan todas las estructuras que consume la UI. El frontend solo renderiza, filtra y presenta.

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Frontend | Next.js (App Router) + React + TypeScript |
| UI | Tailwind CSS + lucide-react |
| Backend API | Hono dentro de Next (/api/*) |
| Auth | JWT + cookie HTTP-only |
| Base de datos | PostgreSQL + drizzle-orm + postgres-js |
| Fuente de datos | Apify (TikTok keyword search) |
| Validación | zod + react-hook-form |
| Testing | vitest (con playwright browser support) |
| UI workshop | Storybook |

---

## ¿Qué facilita?

- Estandariza el análisis: todos miran las mismas métricas calculadas con la misma lógica
- Historial auditable: cada lote tiene un syncId para rastrear y comparar
- Reduce fricción operativa: un botón "Sincronizar" reemplaza tareas manuales repetitivas
- Modo dev/mock: USE_MOCK_DATA=true permite desarrollar sin depender de Apify

---

## Visión a futuro

Evolucionar el radar hacia un flujo editorial más completo:
- Guardar selecciones y notas internas por video/tema
- Crear colecciones y reportes por campaña
- Exportaciones automatizadas (resúmenes semanales para el equipo)
