import express from "express";
import {
  getAllBlogPosts,
  getASingleBlogPostById,
  postANewBlogPost,
  updateAnExistingBlogPostById,
  deleteABlogPostById,
} from "../controllers/controller.js";
const router = express.Router();

// Retrieve all blog posts
router.get("/api/posts", getAllBlogPosts);

// Retrieve a single blog post by ID
router.get("/api/posts/:id", getASingleBlogPostById);

// Create a new blog post
router.post("/api/posts", postANewBlogPost);

// Update an existing blog post by ID
router.put("/api/posts/:id", updateAnExistingBlogPostById);

// Delete a blog post by ID
router.delete("/api/posts/:id", deleteABlogPostById);

export default router;
