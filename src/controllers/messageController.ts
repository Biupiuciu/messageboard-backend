import { Request, Response } from "express";
import MessageService from "../services/messageService";
import Message from "../models/Message";
import { HttpStatus } from "../utilis/httpStatus";
export default class MessageController {
  // POST /messages
  static async createMessage(req: Request, res: Response): Promise<void> {
    const { username, message } = req.body;

    //validate message
    const validationErrors = Message.validateMessage(username, message);
    if (validationErrors.length > 0) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ success: false, message: validationErrors });
      return;
    }

    try {
      const newMessage = MessageService.createMessage(username, message);
      res.status(HttpStatus.CREATED).json({ success: true, data: newMessage });
    } catch (error: any) {
      console.log(error.message);
      res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message:
          "An unexpected error occurred while creating new message. Please try again later.",
      });
    }
  }

  // GET /messages
  static async getMessages(req: Request, res: Response): Promise<void> {
    const { page = 1, limit = 5 } = req.query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    //validate params
    if (isNaN(pageNumber) || isNaN(limitNumber)) {
      res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message:
          "Invalid URL parameters. 'page' and 'limit' must be valid numbers.",
      });
      return;
    }

    try {
      const messages = MessageService.getMessages(pageNumber, limitNumber);
      res.status(HttpStatus.OK).json({ success: true, data: messages });
    } catch (error: any) {
      console.log(error.message);
      res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message:
          "An unexpected error occurred while fetching messages. Please try again later.",
      });
    }
  }
}
