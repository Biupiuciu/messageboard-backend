import { Router } from "express";
import messageRouter from "./Message/messageRoute";

const router = Router();

router.use("/messages", messageRouter); // Add the message routes under the "/messages" path

export default router;
