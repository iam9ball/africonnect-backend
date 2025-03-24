// src/routes/auth.routes.ts
import { Router } from "express";
import { register } from "../controllers/auth/register";
import login from "../controllers/auth/login";

const router = Router();

// router.post(
//   "/onboard",
//   [
//     validatePhone,
//     validateBusinessDetails,
//     createMerchant,
//     generateQRCode,
//     sendWelcomeSMS,
//   ],
//   onboardMerchant
// );

router.post("/register", register);
router.post("/login", login);

export default router;


