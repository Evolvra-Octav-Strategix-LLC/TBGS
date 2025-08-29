import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../server/db";
import { adminUsers } from "../shared/schema";

async function createAdminUser() {
  const username = "admin";
  const password = "tbgs2024"; // Change this after first login
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const [existingUser] = await db.select()
      .from(adminUsers)
      .where(eq(adminUsers.username, username));
    
    if (existingUser) {
      console.log("Admin user already exists!");
      return;
    }
    
    await db.insert(adminUsers).values({
      username,
      passwordHash: hashedPassword,
    });
    
    console.log("Admin user created successfully!");
    console.log("Username: admin");
    console.log("Password: tbgs2024");
    console.log("Please change the password after first login!");
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    process.exit(0);
  }
}

createAdminUser();