import { sql } from "drizzle-orm";
import { int, mysqlTable, varchar, mysqlEnum, text, timestamp, index, json, boolean } from "drizzle-orm/mysql-core";

export const blogs = mysqlTable(
  "blogs",
  {
    slug: varchar("slug", { length: 191 }).unique().notNull(),
    count: int("count").default(1).notNull(),
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    user_id: varchar("user_id", { length: 191 }).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }),
    image: text("image"),
    content: json("content"),
    created_at: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow()
      .notNull(),
    published: boolean("published").default(false).notNull(),
  },
  (post) => ({
    userIdIndex: index("posts__user_id__idx").on(post.user_id),
  })
);

export const users = mysqlTable("users", {
  id: varchar("id", { length: 191 }).primaryKey().notNull(),
  username: varchar("username", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  role: mysqlEnum("role", ["user", "yun"]).default("user").notNull(),
});
