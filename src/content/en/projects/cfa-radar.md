---
title: "CFA Trending (CFA Radar)"
date: 2026-05-21
tag: "Dashboard"
description: "Internal dashboard for monitoring and analyzing TikTok trends, with Apify sync, weekly aggregations, and secure auth."
draft: false
image: "https://i.ibb.co/Gfyz0ZPh/Captura-de-pantalla-2026-05-21-164132.png"
country: "Colombia"
---

**Context:** The communications team needed to detect real TikTok trends (hashtags, words, accounts, audios, topics, and videos) without relying on "what appears on the feed," and to compare week over week with an auditable history.

---

## The challenge

Moving from a manual, subjective process to a reliable radar with data, filters, and consistency.

| Before | After |
|---|---|
| Someone checked the feed "by eye" | Structured data by keyword |
| No history or traceability | Every sync has an auditable syncId |
| Metrics impossible to compare | Automatic weekly aggregations |
| Dependent on one person | Dashboard accessible to the whole team |

---

## The result

An internal dashboard app that centralizes trend analysis:

- Syncs data by keywords from Apify
- Normalizes and persists the dataset in PostgreSQL
- Calculates aggregations and weekly metrics ready for consumption
- Protects access with JWT + HTTP-only cookie

---

## What is it and what does it do?

CFA-Trending (also called CFA Radar) is an internal application built to monitor trending TikTok content within a defined area of interest (sector/keywords).

| Component | Description |
|---|---|
| weeklyMetrics | Volume, behavior, growth signals |
| trendingHashtags | Hashtags with the most traction |
| trendingWords | Emerging keywords |
| accountsTable | Accounts gaining traction |
| trendingTopics | Hot topics of the period |
| trendingAudios | Trending audios |
| featuredVideos | Featured videos for inspiration |

---

## How does it work?

### Login and access control

The user logs in from the UI. The API validates credentials (environment variables). If correct, it signs a JWT and stores it as an HTTP-only auth cookie. A middleware protects routes — no valid cookie redirects to /login.

### Sync and batch versioning

- sync=false — reads the latest existing batch
- sync=true or no previous data — queries Apify, transforms raw items to CleanVideo, saves to DB with a unique syncId

### Dashboard aggregations

With the latest syncId, all structures consumed by the UI are calculated. The frontend only renders, filters, and presents.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router) + React + TypeScript |
| UI | Tailwind CSS + lucide-react |
| Backend API | Hono inside Next (/api/*) |
| Auth | JWT + HTTP-only cookie |
| Database | PostgreSQL + drizzle-orm + postgres-js |
| Data source | Apify (TikTok keyword search) |
| Validation | zod + react-hook-form |
| Testing | vitest (with playwright browser support) |
| UI workshop | Storybook |

---

## What does it enable?

- Standardizes analysis: everyone looks at the same metrics calculated with the same logic
- Auditable history: every batch has a syncId to track and compare
- Reduces operational friction: one "Sync" button replaces repetitive manual tasks
- Dev/mock mode: USE_MOCK_DATA=true lets you develop without depending on Apify

---

## Future vision

Evolve the radar into a more complete editorial flow:
- Save selections and internal notes per video/topic
- Create collections and reports by campaign
- Automated exports (weekly summaries for the team)
