import { Router } from "express";
import messageRouter from "./routes/messageRoute";

const router = Router();

router.use("/messages", messageRouter); // Add the message routes under the "/messages" path

export default router;
