export default class Message {
  id: number;
  username: string;
  message: string;
  created_at: string;

  constructor(id: number, username: string, message: string) {
    this.id = id;
    this.username = username;
    this.message = message;
    this.created_at = new Date().toISOString();
  }

  static validateMessage(username: string, message: string): string[] {
    const errors: string[] = [];

    // Validate message is not empty
    if (!message) {
      errors.push("Message cannot be empty.");
    }

    // Validate message length
    if (message && message.length > 500) {
      errors.push("Message cannot exceed 500 characters.");
    }

    // Validate username is not empty
    if (!username) {
      errors.push("Username cannot be empty.");
    }
    // Validate username length
    if (username && username.length > 20) {
      errors.push("Username cannot exceed 20 characters.");
    }
    return errors;
  }
}
