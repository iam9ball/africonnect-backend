// src/config/index.ts
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";


dotenv.config();

export const prisma = new PrismaClient();

export const jwtSecret =  process.env.JWT_SECRET || "defaultsecret";
export const  port  = process.env.PORT || 5000;
export const  resendKey  = process.env.RESEND_API_KEY;

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});
redisClient.connect().catch(console.error);
