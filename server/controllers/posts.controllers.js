import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.posts });
  }
};

export const createPosts = async (req, res) => {
  const { title, message, creator, tags, selectedFile } = req.body;

  const newPostMessage = new PostMessage({
    title,
    message,
    creator,
    tags,
    selectedFile,
  });
  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No Post with that id");
  } else {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {
      new: true,
    });
    res.json(updatedPost);
  }
};

export default router;
