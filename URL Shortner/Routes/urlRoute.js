import express from "express";
import { handleGenerateNewShortUrl, handleGetAnalytics } from "../Controller/controller.js"; // Ensure .js extension

const router = express.Router();


router.post("/", handleGenerateNewShortUrl);
// router.get("/:shortID", handleRedirectUrl);
router.get('/analytics/:shortID', handleGetAnalytics)


export default router;
