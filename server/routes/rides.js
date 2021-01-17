import express from "express";

import {
  getRides,
  createRide,
  updateRide,
  deleteRide,
} from "../controllers/rides.js";

const router = express.Router();

// http:localhost:5000/posts
router.get("/", getRides);
router.post("/", createRide);
router.patch("/:id", updateRide);
router.delete("/:id", deleteRide);

export default router;
