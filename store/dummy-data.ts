export const chatDummyData = [
  {
    message:
      "Hello, I'm the AI assistant for the company. How can I help you today?",
    messageType: "assistant",
  },
  {
    message: "What is the company name?",
    messageType: "user",
  },
  {
    message: `Yes, the proposed schema is designed to handle both multiple chat threads per user and multiple messages within a specific chat thread. Let me explain how each of these scenarios is handled in the schema.
1. Handling Multiple Chat Threads for a Given User
To support multiple chat threads for a given user, the following features are implemented:
Table: chats
The chats table contains a column called user_id which references the user who initiated the chat session.
The user_id allows a user to have multiple chat sessions. Each chat session is unique, represented by a UUID (id), which means that a user can initiate multiple independent chats at different times.
This allows users to create new conversations without any restriction to a single ongoing chat thread, providing flexibility in initiating new workflows or continuing previous ones.`,
    messageType: "assistant",
  },
  {
    message: "What is the company name?",
    messageType: "user",
  },
  {
    message: `Here are the extracted attributes from the JSON file:
Workflow Metadata

Workflow ID: 

Timestamp: 

User Input: "Execute the 3D model using the tools"`,
    messageType: "assistant",
  },
];
