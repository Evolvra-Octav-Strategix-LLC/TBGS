import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json, boolean, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const serviceRequests = pgTable("service_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  selectedService: text("selected_service").notNull(),
  photos: json("photos").$type<string[]>().default([]),
  address: text("address").notNull(),
  projectDescription: text("project_description").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  contactPreference: text("contact_preference").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  color: text("color").notNull().default("#3b82f6"), // Blue default
  createdAt: timestamp("created_at").defaultNow(),
});

export const tags = pgTable("tags", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const articles = pgTable("articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  keywords: text("keywords"),
  featuredImage: text("featured_image"),
  categoryId: varchar("category_id").references(() => categories.id),
  status: text("status").notNull().default("draft"), // draft, published
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const articleTags = pgTable("article_tags", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  articleId: varchar("article_id").notNull().references(() => articles.id, { onDelete: "cascade" }),
  tagId: varchar("tag_id").notNull().references(() => tags.id, { onDelete: "cascade" }),
});

// Admin users table
export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  role: text("role").notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Background task queue for image processing
export const imageTasks = pgTable("image_tasks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  originalPath: text("original_path").notNull(),
  originalName: text("original_name").notNull(),
  status: text("status").notNull().default("pending"), // pending, processing, completed, failed
  parentType: text("parent_type").notNull(), // service_request, offerte
  parentId: varchar("parent_id").notNull(),
  processingOptions: json("processing_options").$type<{
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    format?: string;
    createThumbnail?: boolean;
    thumbnailSize?: number;
    addWatermark?: boolean;
    watermarkText?: string;
    removeMetadata?: boolean;
    autoRotate?: boolean;
  }>().default({}),
  result: json("result").$type<{
    originalSize?: number;
    optimizedSize?: number;
    compressionRatio?: number;
    dimensions?: { width: number; height: number };
    compressedPath?: string;
    watermarkedPath?: string;
    thumbnailPath?: string;
  }>(),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").defaultNow(),
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),
});

// Relations
export const categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles),
}));

export const articlesRelations = relations(articles, ({ one, many }) => ({
  category: one(categories, {
    fields: [articles.categoryId],
    references: [categories.id],
  }),
  articleTags: many(articleTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  articleTags: many(articleTags),
}));

export const articleTagsRelations = relations(articleTags, ({ one }) => ({
  article: one(articles, {
    fields: [articleTags.articleId],
    references: [articles.id],
  }),
  tag: one(tags, {
    fields: [articleTags.tagId],
    references: [tags.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertServiceRequestSchema = createInsertSchema(serviceRequests).pick({
  selectedService: true,
  photos: true,
  address: true,
  projectDescription: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  contactPreference: true,
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
  createdAt: true,
});

export const insertTagSchema = createInsertSchema(tags).omit({
  id: true,
  createdAt: true,
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
});

export const insertImageTaskSchema = createInsertSchema(imageTasks).omit({
  id: true,
  createdAt: true,
  startedAt: true,
  completedAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertServiceRequest = z.infer<typeof insertServiceRequestSchema>;
export type ServiceRequest = typeof serviceRequests.$inferSelect;

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;
export type InsertTag = z.infer<typeof insertTagSchema>;
export type Tag = typeof tags.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertImageTask = z.infer<typeof insertImageTaskSchema>;
export type ImageTask = typeof imageTasks.$inferSelect;
