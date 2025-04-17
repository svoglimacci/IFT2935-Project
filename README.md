# IFT2935 - Projet

Projet crée dans le cadre du cours de Base de donnée (IFT2935) @ UdeM.

## Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- PostgreSQL driver (https://www.postgresql.org/)

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/svoglimacci/IFT2935-Project.git
```

## Getting Started - Backend

1. Install dependencies by running:

   ```bash
   cd IFT2935-Project/server
   npm install
   ```

2. Create a database by running:

```bash
 psql -U %USERNAME%
 CREATE DATABASE %DATABASE_NAME%;
```

3. set your db config values in the `db.js` file.

4. Generate datas by running:

   ```bash
   npm run seed
   ```

5. Run the server:

   ```bash
   npm start
   ```

The server will start running on `http://localhost:8080`.

## API Endpoints

The server exposes the following API endpoints:

- `GET /api/users`: Get all users.

## Getting Started - Frontend

1. Install dependencies by running:

   ```bash
   cd IFT2935-Project
   pnpm install
   ```

2. Run the app:

   ```bash
   pnpm run dev
   ```

The application will start running on `http://localhost:3000`.
