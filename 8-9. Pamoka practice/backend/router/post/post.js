import express from "express";
import { createNewPost, deletePostById, getAllPostsById } from "../../controllers/posts/index.js";
const router = express.Router();

//postinsim nauja post'a
router.post("/post", createNewPost);

//istrint post'a
router.delete("/post/:id", deletePostById);

//kad paduotu posts by id
router.get("/post/:id", getAllPostsById);

export default router;
