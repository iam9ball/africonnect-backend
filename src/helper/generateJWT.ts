import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import { Response } from "express";


export function generateJWT(userId: string, res: Response) {
  const token = jwt.sign({ id: userId }, jwtSecret, {
    expiresIn: "1h",
  }); //does this store two jwt, if user retries, what does it do

  // Set the JWT in an HTTP-only cookie
  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "lax",
    maxAge: 3600000, // 1 hour
  });
}
