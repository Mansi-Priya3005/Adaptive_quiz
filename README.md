#  Adaptive Quiz Platform

## Problem Statement
Most quiz applications present static questions that do not adapt to a user’s skill level.
This leads to poor engagement and ineffective learning.

This project addresses that problem by dynamically adjusting question difficulty based on real-time user performance.

---

##  Overview
Adaptive Quiz is a full-stack web application that personalizes quizzes by adapting question difficulty according to user responses.  
User attempts are persisted, enabling performance tracking and future analytics.

---

##  Key Features
- Adaptive difficulty selection (Easy → Medium → Hard)
- Performance-based scoring system
- Persistent attempt storage using a database
- Clean separation of UI, business logic, and backend APIs
- Scalable project structure

---

##  Adaptive Algorithm
- Correct answer → difficulty increases
- Incorrect answer → difficulty decreases
- Ensures a personalized and progressive learning flow

---

##  Tech Stack
**Frontend**
- Next.js (App Router)
- React Hooks
- TypeScript

**Backend**
- Next.js API Routes
- Prisma ORM
- SQLite database

---

##  Architecture
- `/api/questions` → fetch quiz questions
- `/api/attempt` → store user attempts
- Prisma models: `User`, `Question`, `Attempt`
- Adaptive logic handled on the client with persisted backend state

---

##  How to Run Locally
```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
