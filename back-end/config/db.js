import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  user: !process.env.DATABASE_URL ? process.env.DB_USER : undefined,
  host: !process.env.DATABASE_URL ? process.env.DB_HOST : undefined,
  database: !process.env.DATABASE_URL ? process.env.DB_NAME : undefined,
  password: !process.env.DATABASE_URL ? process.env.DB_PASSWORD : undefined,
  port: !process.env.DATABASE_URL ? process.env.DB_PORT : undefined,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

export default pool;