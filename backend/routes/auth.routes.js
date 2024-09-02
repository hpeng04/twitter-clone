import express from "express";
import { signup, login, logout, getMe } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// router.post("/signup", (req, res) => {
//     res.json({
//         data: "You hit the signup point",
//     });
// });

router.get("/me", protectRoute, getMe);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;