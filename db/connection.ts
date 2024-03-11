import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
// create the connection
const poolConnection = mysql.createPool({
  uri: process.env.DATABASE_URL!,
  // uri: process.env.DATABASE_URL!,
});

export const db = drizzle(poolConnection, { logger: process.env.NODE_ENV === "development" ? true : false });
