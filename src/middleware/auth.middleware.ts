// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateJWT = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // Try to get token from the Authorization header or cookie
  const authHeader = req.headers.authorization || req.cookies?.authToken;

  if (authHeader) {
    // Support both "Bearer token" and cookie value
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    jwt.verify(token, jwtSecret, (err:any, decoded:any) => {
      if (err) {
        return res.status(403).json({ error: "Token is not valid" });
      }
      req.user = decoded; // attach decoded token (user data) to request
      next();
    });
  } else {
    res.status(401).json({ error: "Authorization token  missing" });
  }
};
