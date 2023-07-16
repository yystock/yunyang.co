import "server-only";

import { int, mysqlTable, varchar, mysqlEnum, text, timestamp } from "drizzle-orm/mysql-core";
import { InferModel } from "drizzle-orm";

export const views = mysqlTable("Views", {
  slug: varchar("slug", { length: 191 }).primaryKey(),
  count: int("count").default(1).notNull(),
});

export const users = mysqlTable("users", {
  id: varchar("id", { length: 191 }).primaryKey().notNull(),
  username: varchar("username", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").defaultNow().onUpdateNow().notNull(),
  role: mysqlEnum("role", ["user", "yun"]).default("user").notNull(),
});

type User = InferModel<typeof users, "select">;
type NewUser = InferModel<typeof users, "insert">;
