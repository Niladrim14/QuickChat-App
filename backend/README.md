# QuickChat Backend API

A real-time chat application backend built with Node.js, Express, MongoDB, and Socket.io.

## 🚀 Features

- **User Authentication** - Secure signup/login with JWT tokens
- **Real-time Messaging** - Instant message delivery using Socket.io
- **Online Status** - Track users' online/offline status
- **Typing Indicators** - Show when users are typing
- **Image Upload** - Send images via Cloudinary integration
- **Email Notifications** - Welcome emails using Resend
- **Rate Limiting** - Arcjet protection against abuse
- **Optimistic Updates** - Immediate UI feedback

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time bidirectional communication
- **JWT** - Authentication
- **Cloudinary** - Image storage
- **Resend** - Email service
- **Arcjet** - Security and rate limiting
- **bcryptjs** - Password hashing

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Resend account
- Arcjet account

## 🔧 Installation

1. **Clone the repository**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Resend Email
   RESEND_API_KEY=your_resend_api_key

   # Arcjet
   ARCJET_KEY=your_arcjet_key
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3000`

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/        # Route controllers
│   │   ├── auth.controllers.js
│   │   └── message.controller.js
│   ├── models/            # Mongoose models
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/            # API routes
│   │   ├── auth.route.js
│   │   └── message.route.js
│   ├── middleware/        # Custom middleware
│   │   ├── auth.middleware.js
│   │   ├── arcjet.middleware.js
│   │   └── socket.auth.middleware.js
│   ├── lib/              # Utilities and config
│   │   ├── db.js
│   │   ├── socket.js
│   │   ├── cloudinary.js
│   │   ├── resend.js
│   │   ├── arcjet.js
│   │   ├── env.js
│   │   └── utils.js
│   ├── emails/           # Email templates
│   │   ├── emailHandler.js
│   │   └── emailTempletes.js
│   └── server.js         # Entry point
├── package.json
└── .env
```

## 🔌 API Endpoints

### Authentication

```http
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/check
PUT  /api/auth/update-profile
```

### Messages

```http
GET  /api/messages/contacts
GET  /api/messages/chats
GET  /api/messages/:id
POST /api/messages/send/:id
```

## 🔐 Authentication

The API uses JWT tokens stored in HTTP-only cookies for authentication. Protected routes require a valid JWT token.

## 🌐 Socket.io Events

### Client → Server

- `typing` - User started typing
- `stopTyping` - User stopped typing

### Server → Client

- `getOnlineUsers` - List of online user IDs
- `newMessage` - New message received
- `userTyping` - User is typing
- `userStoppedTyping` - User stopped typing

## 📝 Environment Variables

| Variable                | Description                          |
| ----------------------- | ------------------------------------ |
| `PORT`                  | Server port (default: 3000)          |
| `MONGODB_URI`           | MongoDB connection string            |
| `JWT_SECRET`            | Secret key for JWT signing           |
| `NODE_ENV`              | Environment (development/production) |
| `CLIENT_URL`            | Frontend URL for CORS                |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name                |
| `CLOUDINARY_API_KEY`    | Cloudinary API key                   |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret                |
| `RESEND_API_KEY`        | Resend email API key                 |
| `ARCJET_KEY`            | Arcjet security key                  |

## 🚦 Rate Limiting

Arcjet is configured to protect against:

- Brute force attacks on auth endpoints
- API abuse
- DDoS attacks

## 📧 Email Integration

Welcome emails are automatically sent to new users using Resend and custom HTML templates.

## 🖼️ Image Upload

Images are uploaded to Cloudinary with a 10MB size limit. Base64 encoded images are accepted.

## 🔒 Security Features

- Password hashing with bcryptjs
- HTTP-only cookies for tokens
- CORS protection
- Rate limiting with Arcjet
- JWT expiration
- Input validation

## 🐛 Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description"
}
```

## 📜 Scripts

```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

MIT License

## 👥 Authors

Your Name - [GitHub](https://github.com/Niladrim14)

## 🙏 Acknowledgments

- Socket.io for real-time functionality
- Cloudinary for image hosting
- Resend for email service
- Arcjet for security
