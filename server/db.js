import pg from 'pg';

export const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

export function PostgreSQL(req, res, next) {
  req.pool = pool;
  next();
}
