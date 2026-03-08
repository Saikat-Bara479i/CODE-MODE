# LeetPROJECT

LeetPROJECT is a full-stack web application for creating, browsing, and solving programming problems. It includes a Node.js + Prisma backend (APIs, authentication, problem & submission management, code execution integration) and a React + Vite frontend UI.

## Features

- User authentication (signup / login)
- Create, edit, and list problems
- Submit solutions and view submissions
- Execute code using the integrated judge (Judge0-like) library
- Playlists and problem grouping

## Repository Structure

- `backend/` — Node.js server with Prisma, Express routes, and code-execution integrations
- `frontend/` — React app (Vite) with UI components and state stores

## Prerequisites

- Node.js (v16+ recommended)
- npm (or yarn)
- PostgreSQL (or other database supported by Prisma) and a configured `DATABASE_URL`

## Backend — Setup & Run

1. Change to the backend folder:

   npm --workspace backend install

   or

   cd backend
   npm install

2. Configure environment variables in `backend/.env` (create one if missing):

- `DATABASE_URL` — your Postgres connection string
- `JWT_SECRET` — secret for signing auth tokens

3. Generate Prisma client and run migrations:

   npx prisma generate
   npx prisma migrate dev --name init

4. Start the backend in development mode:

   npm run dev

The backend exposes API routes under `/api` (see `src/routes/`). Key endpoints include auth, problems, submissions, playlists, and execute-code.

## Frontend — Setup & Run

1. Change to the frontend folder and install:

   cd frontend
   npm install

2. Configure frontend environment variables (if needed):

- `VITE_API_URL` — base URL for the backend API (e.g. `http://localhost:4000/api`)

3. Start the development server:

   npm run dev

Open the UI at the address printed by Vite (typically `http://localhost:5173`).

## Database & Prisma

- Prisma schema is in `backend/prisma/schema.prisma`. Migrations are tracked in `backend/prisma/migrations/`.
- Use `npx prisma studio` to explore data during development.

## Environment Notes

- Keep secrets out of source control. Add `backend/.env` to `.gitignore` if not already ignored.

## Development Tips

- To run only backend or frontend, use the respective `npm run dev` in its folder.
- The backend integrates a judge/execution library (`libs/judge0.libs.js`) — ensure any API keys or external endpoints required by that integration are configured.

## Contributing

- Fork the repo, create a topic branch, and open a pull request with a clear description.

## License

This project does not include a license file. Add one if you plan to publish.

---

If you want, I can also:

- add a `.env.example` in `backend/`,
- add quick-start scripts in the monorepo root, or
- run the app locally and verify both servers start. Which would you like next?

