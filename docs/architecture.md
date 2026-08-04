# EquiFlow Client Architecture

## Project Overview

EquiFlow Client is a React application that provides a modern interface for visualizing historical financial market data.

The frontend communicates with the Spring Boot backend through REST APIs and displays interactive charts and financial statistics.

## Quick Links

🌐 Live Demo - https://equiflow.ferdo.eu

🔗 REST API: https://api.equiflow.ferdo.eu

📦 Backend Repository - https://github.com/FD-technic/equiflow-backend

💻 Frontend Repository - https://github.com/FD-technic/equiflow-client

---


# System Architecture

```text
          User
            │
            ▼
     React Components
            │
            ▼
       Service Layer
            │
            ▼
        REST API
            │
            ▼
 Spring Boot Backend
            │
     PostgreSQL + Cache
```

# Project Structure

```text
src
│
├── api
├── components
├── data
├── types
├── App.tsx
└── main.tsx
```

---

# Application Layers

| Layer | Responsibility |
|--------|----------------|
| components | Reusable React UI components |
| api | Communication with the backend REST API |
| data | Default values and application constants |
| types | TypeScript interfaces and models |
| App | Application entry point and state management |

---

# Data Flow

```text
User Action
      │
      ▼
React Component
      │
      ▼
API Service
      │
      ▼
REST Request
      │
      ▼
Spring Boot Backend
      │
      ▼
JSON Response
      │
      ▼
React State
      │
      ▼
UI Update
```

---

# Technologies

- React
- TypeScript
- Vite
- Fetch API
- CSS
- REST API

---

# Design Principles

- Component-based architecture
- Separation of UI and API communication
- Type-safe data models with TypeScript
- Reusable components
- React Hooks for state management
- Responsive user interface

---

# Future Improvements

- Portfolio dashboard
- Multiple asset comparison
- Advanced financial metrics
- Interactive filtering
- Data export
- Dark/Light theme improvements

---

Developed by **Petr Hron**

🌐 https://fdweb.cz

💼 https://linkedin.com/in/petr-hron-dev