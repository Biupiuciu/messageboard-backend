import { Router } from "express";
import MessageController from "./messageController";

const messageRouter = Router();

// POST route to create a new message
messageRouter.post("/", MessageController.createMessage);

// GET route to fetch all messages
messageRouter.get("/", MessageController.getMessages);

export default messageRouter;
