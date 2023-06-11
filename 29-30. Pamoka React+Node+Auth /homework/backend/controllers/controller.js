import express from "express";
import Post from "../models/postModel.js";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

export async function getAllBlogPosts(req, res) {
  try {
    const posts = await Post.find({});

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getASingleBlogPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postANewBlogPost(req, res) {
  try {
    const { title, content, author } = req.body;

    const post = await Post.create({
      title,
      content,
      author,
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateAnExistingBlogPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.set(req.body);
    await post.save();

    res.json(post);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: error.message });
  }
}

export async function deleteABlogPostById(req, res) {
  try {
    const { id } = req.params;
    const resp = await Post.findByIdAndDelete(id);

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
