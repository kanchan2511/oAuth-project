

import express from "express";
import { isAuthenticated } from "../middleware/authenticated.js";

const router = express.Router();

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.json({
    message: "Welcome to protected dashboard",
    user: req.user
  });
});

export default router;