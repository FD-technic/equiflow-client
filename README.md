# EquiFlow Client

EquiFlow Client is the frontend application of the EquiFlow investment dashboard.

Built with React, TypeScript and Vite, it provides a modern user interface for visualizing historical market data, portfolio performance and financial analytics.

The client communicates with the Spring Boot backend through REST APIs and is available online at **https://equiflow.ferdo.eu**.

## Quick Links

🌐 Live Demo - https://equiflow.ferdo.eu

🔗 REST API: https://api.equiflow.ferdo.eu

📦 Backend Repository - https://github.com/FD-technic/equiflow-backend

💻 Frontend Repository - https://github.com/FD-technic/equiflow-client

---


# Screenshot

![EquiFlow Dashboard](docs/images/dashboard.png)

---

# Features

- Interactive stock and ETF charts
- Historical market data visualization
- Multiple time periods
- Responsive dashboard
- REST API integration
- Portfolio-ready architecture

---

# Tech Stack

- React
- TypeScript
- Vite
- REST API
- CSS
- Docker
- Nginx
- Linux VPS
- Git
- GitHub

---

# Architecture

```text
Browser
    │
    ▼
React Client
    │
REST API
    │
    ▼
Spring Boot Backend
    │
 ┌──┴──────────────┐
 ▼                 ▼
Cache         PostgreSQL
```

---

# Getting Started

## Requirements

- Node.js 20+
- npm

---

## Installation

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Application will be available at

```text
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

The production build is generated in

```text
dist/
```

---

## Configuration

Backend API URL is configured using environment variables.

Example:

```env
VITE_API_URL=http://localhost:8080
```

---

# User Interface

The dashboard allows users to

- search financial assets by ticker
- switch between different time periods
- display interactive price charts
- view historical market data
- communicate with the backend REST API

---

# Project Status

## Implemented

- React + TypeScript application
- REST API communication
- Historical market data visualization
- Interactive charts
- Multiple ticker support
- Multiple time periods
- Responsive layout

## Planned

- Portfolio dashboard
- Multiple chart comparison
- Advanced financial metrics
- Export functionality
- UI improvements

---

# Documentation

Additional documentation

- architecture.md
- roadmap.md

---

# License

This project is developed as a learning and portfolio project.

---

Developed by **Petr Hron**

🌐 https://fdweb.cz

💼 https://linkedin.com/in/petr-hron-dev