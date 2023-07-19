import { int, mysqlTable, varchar, mysqlEnum, text, timestamp, index, json, boolean } from "drizzle-orm/mysql-core";

export const blogs = mysqlTable(
  "blogs",
  {
    slug: varchar("slug", { length: 191 }).unique().notNull(),
    count: int("count").default(1).notNull(),
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    user_id: varchar("user_id", { length: 191 }).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    image: text("image"),
    content: json("content"),
    created_at: timestamp("created_at").notNull().defaultNow().onUpdateNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
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
  createdAt: timestamp("createdAt").defaultNow().onUpdateNow().notNull(),
  role: mysqlEnum("role", ["user", "yun"]).default("user").notNull(),
});
