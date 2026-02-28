

import express from "express";
import passport from "passport";
import { logout, getMe } from "../controllers/authControllers.js";
import { isAuthenticated } from "../middleware/authenticated.js";


const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect:process.env.CLIENT_URL + "/login",
    successRedirect: process.env.CLIENT_URL + "/dashboard"
  })
);

router.get("/me",isAuthenticated, getMe);
router.post("/logout", logout);

export default router;