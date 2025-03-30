# messageboard-backend

## Description

This project is a Express app built with TypeScript for managing a message board. It allows users to submit messages and view all messages in reverse chronological order with support for pagination. The API provides endpoints for submitting and retrieving messages. The data is stored in-memory.

## Tech stacks

- Node.js with Express

- TypeScript for type safety

## Installation

### Prerequisites

Ensure you have Node.js and npm installed.

First, clone this repository to your local machine and navigate to the project directory:

```
git clone https://github.com/Biupiuciu/messageboard-backend.git
cd messageboard-backend
```

Then, install the dependencies using npm:

```
npm install
```

## Running the Project

To run the application, use the following command in the root directory of the project:

```
npx tsx app.ts
```

This will start the server, which will listen at http://localhost:3000 (or the port you have configured).

## Environment Variables

If you are using environment variables, create a .env file and add the necessary variables. For example:

```
PORT=80
```

## API Endpoints

Here are the available API endpoints:

- POST /messages – Submit a new message

  - Request Body:

  ```
  {
    "username": "YourUsername",
    "message": "Your message content"
  }
  ```

- GET /messages – Get all messages in reverse chronological order

  - Query Parameters (for pagination.):
    - page: The page number (defaults to 1 if not provided).
    - limit: The number of messages per page (defaults to 5 if not provided).

## Testing with Postman

A Postman Collection is provided in the repository (MessageBoard.postman_collection).
