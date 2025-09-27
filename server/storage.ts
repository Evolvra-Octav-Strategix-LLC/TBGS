import { 
  type User, type InsertUser, type ServiceRequest, type InsertServiceRequest,
  type Article, type InsertArticle, type Category, type InsertCategory,
  type Tag, type InsertTag, type AdminUser, type InsertAdminUser,
  users, serviceRequests, articles, categories, tags, adminUsers, articleTags
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, desc, like, and, or } from "drizzle-orm";

// Export db for other services
export { db };

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admin Users
  getAdminUser(id: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  
  // Categories
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: string, category: Partial<InsertCategory>): Promise<Category | undefined>;
  deleteCategory(id: string): Promise<boolean>;
  
  // Tags
  getTags(): Promise<Tag[]>;
  getTagBySlug(slug: string): Promise<Tag | undefined>;
  createTag(tag: InsertTag): Promise<Tag>;
  updateTag(id: string, tag: Partial<InsertTag>): Promise<Tag | undefined>;
  deleteTag(id: string): Promise<boolean>;
  
  // Articles
  getArticles(filters?: { status?: string; categoryId?: string; search?: string }): Promise<Article[]>;
  getArticle(id: string): Promise<Article | undefined>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getPublishedArticles(): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: string, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: string): Promise<boolean>;
  
  // Article Tags
  getArticleTags(articleId: string): Promise<Tag[]>;
  setArticleTags(articleId: string, tagIds: string[]): Promise<void>;
  
  // Service Requests (existing)
  getServiceRequests(): Promise<ServiceRequest[]>;
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;
}

export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Admin Users
  async getAdminUser(id: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return user;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return user;
  }

  async createAdminUser(insertUser: InsertAdminUser): Promise<AdminUser> {
    const [user] = await db.insert(adminUsers).values(insertUser).returning();
    return user;
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return db.select().from(categories).orderBy(categories.name);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.slug, slug));
    return category;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const [category] = await db.insert(categories).values(insertCategory).returning();
    return category;
  }

  async updateCategory(id: string, updateData: Partial<InsertCategory>): Promise<Category | undefined> {
    const [category] = await db.update(categories).set(updateData).where(eq(categories.id, id)).returning();
    return category;
  }

  async deleteCategory(id: string): Promise<boolean> {
    const result = await db.delete(categories).where(eq(categories.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Tags
  async getTags(): Promise<Tag[]> {
    return db.select().from(tags).orderBy(tags.name);
  }

  async getTagBySlug(slug: string): Promise<Tag | undefined> {
    const [tag] = await db.select().from(tags).where(eq(tags.slug, slug));
    return tag;
  }

  async createTag(insertTag: InsertTag): Promise<Tag> {
    const [tag] = await db.insert(tags).values(insertTag).returning();
    return tag;
  }

  async updateTag(id: string, updateData: Partial<InsertTag>): Promise<Tag | undefined> {
    const [tag] = await db.update(tags).set(updateData).where(eq(tags.id, id)).returning();
    return tag;
  }

  async deleteTag(id: string): Promise<boolean> {
    const result = await db.delete(tags).where(eq(tags.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Articles
  async getArticles(filters?: { status?: string; categoryId?: string; search?: string }): Promise<Article[]> {
    const conditions = [];
    if (filters?.status) {
      conditions.push(eq(articles.status, filters.status));
    }
    if (filters?.categoryId) {
      conditions.push(eq(articles.categoryId, filters.categoryId));
    }
    if (filters?.search) {
      conditions.push(
        or(
          like(articles.title, `%${filters.search}%`),
          like(articles.content, `%${filters.search}%`)
        )
      );
    }

    if (conditions.length > 0) {
      return db.select().from(articles)
        .where(and(...conditions))
        .orderBy(desc(articles.updatedAt));
    }

    return db.select().from(articles).orderBy(desc(articles.updatedAt));
  }

  async getArticle(id: string): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.id, id));
    return article;
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.slug, slug));
    return article;
  }

  async getPublishedArticles(): Promise<Article[]> {
    return db.select().from(articles)
      .where(eq(articles.status, 'published'))
      .orderBy(desc(articles.publishedAt));
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db.insert(articles).values(insertArticle).returning();
    return article;
  }

  async updateArticle(id: string, updateData: Partial<InsertArticle>): Promise<Article | undefined> {
    const updatedData = {
      ...updateData,
      updatedAt: new Date(),
    };
    const [article] = await db.update(articles).set(updatedData).where(eq(articles.id, id)).returning();
    return article;
  }

  async deleteArticle(id: string): Promise<boolean> {
    const result = await db.delete(articles).where(eq(articles.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Article Tags
  async getArticleTags(articleId: string): Promise<Tag[]> {
    const result = await db
      .select({
        id: tags.id,
        name: tags.name,
        slug: tags.slug,
        createdAt: tags.createdAt,
      })
      .from(articleTags)
      .innerJoin(tags, eq(articleTags.tagId, tags.id))
      .where(eq(articleTags.articleId, articleId));
    
    return result;
  }

  async setArticleTags(articleId: string, tagIds: string[]): Promise<void> {
    // Remove existing tags
    await db.delete(articleTags).where(eq(articleTags.articleId, articleId));
    
    // Add new tags
    if (tagIds.length > 0) {
      const tagData = tagIds.map(tagId => ({ articleId, tagId }));
      await db.insert(articleTags).values(tagData);
    }
  }

  // Service Requests (existing functionality)
  async getServiceRequests(): Promise<ServiceRequest[]> {
    return db.select().from(serviceRequests).orderBy(desc(serviceRequests.submittedAt));
  }

  async createServiceRequest(insertRequest: InsertServiceRequest): Promise<ServiceRequest> {
    const [request] = await db.insert(serviceRequests).values([insertRequest]).returning();
    return request;
  }
}

export const storage = new DatabaseStorage();
