# Architektura projektu EquiFlow Client

## Přehled projektu

EquiFlow Client je webová aplikace pro vizualizaci historických dat finančních aktiv.

Frontend komunikuje s backendovým REST API a zobrazuje data pomocí interaktivních grafů a přehledových statistik.


---

## Celková architektura

```text
User
  │
  ▼
React Components
  │
  ▼
API Layer
  │
  ▼
Spring Boot Backend
```

---

## Struktura repozitáře

Frontend:
https://github.com/FD-technic/equiflow-client

Backend:
https://github.com/FD-technic/equiflow-backend

---

## Struktura projektu

```text
src
│
├─ api
│   └─ komunikace s backendem
│
├─ components
│   └─ znovupoužitelné React komponenty
│
├─ data
│   └─ konstanty a výchozí hodnoty
│
├─ types
│   └─ TypeScript typy
│
├─ App.tsx
└─ main.tsx
```

---

## Hlavní komponenty

### App

Hlavní komponenta aplikace.

Odpovídá za:

* načtení dat
* správu stavu aplikace
* předávání dat podřízeným komponentám

---

### ChartCard

Komponenta zobrazující graf historických dat.

Odpovídá za:

* vykreslení grafu
* aktualizaci při změně tickeru
* aktualizaci při změně časového období

---

### Trend

Komponenta zobrazující výkonnost aktiva.

Odpovídá za:

* výpočet procentní změny
* zobrazení trendu

---

## Datový tok

```text
User Action
      │
      ▼
React Component
      │
      ▼
API Request
      │
      ▼
Backend REST API
      │
      ▼
JSON Response
      │
      ▼
Application State
      │
      ▼
UI Update
```

---

## Použité technologie

* React
* TypeScript
* Vite
* Fetch API
* CSS

---

## Návrhové principy

* komponentová architektura
* oddělení API komunikace od UI
* TypeScript typy pro datové modely
* znovupoužitelné komponenty
* jednoduchá správa stavu pomocí React Hooks

---

## Budoucí rozšíření

* podpora více tickerů
* portfolio dashboard
* porovnání více aktiv
* pokročilé metriky
* export dat
