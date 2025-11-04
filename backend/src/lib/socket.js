import { Server } from "socket.io";
import { ENV } from "./env.js";
import http from "http";
import express from "express";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [ENV.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

io.use(socketAuthMiddleware);
// function to get socket id of a user
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}
// this is for storig online users
const userSocketMap = {}; // {userId:socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.user.fullName);

  const userId = socket.userId;
  userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // with socket.on we listen for events from clients
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user.fullName);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  // Typing indicator events
  socket.on("typing", ({ receiverId }) => {
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("userTyping", { senderId: userId });
    }
  });

  socket.on("stopTyping", ({ receiverId }) => {
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("userStoppedTyping", { senderId: userId });
    }
  });
});
export { io, server, app };
