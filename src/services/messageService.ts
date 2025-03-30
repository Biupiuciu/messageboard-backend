import Message from "../models/Message";
class MessageService {
  // local message storage
  private static messages: Message[] = [];

  //retrieve all messages
  static getMessages(page: number = 1, limit: number = 5): Message[] {
    return this.messages
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ) // in reverse chronological order
      .slice((page - 1) * limit, page * limit); // support pagination
  }

  // Create a message
  static createMessage(username: string, message: string): Message {
    const id =
      this.messages.length > 0
        ? this.messages[this.messages.length - 1].id + 1
        : 1;
    const newMessage = new Message(id, username, message);
    this.messages.push(newMessage);
    return newMessage;
  }
}

export default MessageService;
