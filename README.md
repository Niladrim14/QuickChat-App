# 💬 QuickChat - Real-Time Chat Application

<div align="center">

![QuickChat Banner](https://img.shields.io/badge/QuickChat-Real--Time%20Messaging-10b981?style=for-the-badge&logo=socket.io&logoColor=white)

A modern, feature-rich real-time chat application with a beautiful emerald-themed UI, built with the MERN stack and Socket.io.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?style=flat&logo=socket.io&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Features](#-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Installation](#-installation) • [Screenshots](#%EF%B8%8F-screenshots) • [API Docs](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 🌟 Features

### 🚀 Core Functionality

- ✅ **Real-Time Messaging** - Instant message delivery with Socket.io
- ✅ **User Authentication** - Secure JWT-based auth with HTTP-only cookies
- ✅ **Online Status Tracking** - Real-time presence indicators
- ✅ **Typing Indicators** - See when others are typing
- ✅ **Image Sharing** - Send images with Cloudinary storage
- ✅ **Message History** - Persistent chat conversations
- ✅ **Contact Management** - Browse and connect with users

### 🎨 UI/UX Features

- 🎬 **Cinematic Design** - Movie poster-style image transitions
- 🟢 **Emerald Theme** - Modern, cohesive green color scheme
- ✨ **Animated Borders** - Rotating gradient border effects
- 🔊 **Sound Effects** - Keyboard sounds & notifications
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🌓 **Glass Morphism** - Beautiful backdrop blur effects
- ⚡ **Optimistic Updates** - Immediate UI feedback

### 🔒 Security & Performance

- 🛡️ **Rate Limiting** - Arcjet protection against abuse
- 🔐 **Password Hashing** - Secure bcrypt encryption
- 📧 **Email Notifications** - Welcome emails via Resend
- ⚡ **Optimized Performance** - Code splitting & lazy loading
- 🎯 **Error Handling** - Comprehensive error boundaries

---

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library with hooks
- **Vite** - Lightning-fast build tool
- **Zustand** - Lightweight state management
- **Socket.io Client** - Real-time communication
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - WebSocket library
- **JWT** - Token-based authentication
- **Cloudinary** - Image hosting CDN
- **Resend** - Email service
- **Arcjet** - Security & rate limiting
- **bcryptjs** - Password hashing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5.0+) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** - Package manager
- **Git** - Version control

### Required API Keys

- [Cloudinary Account](https://cloudinary.com/) - For image storage
- [Resend Account](https://resend.com/) - For email service
- [Arcjet Account](https://arcjet.com/) - For security features

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Niladrim14/QuickChat-App.git
cd QuickChat-App
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# Security (Arcjet)
ARCJET_KEY=your_arcjet_key
```

Start the backend server:

```bash
npm run dev
```

Backend will run on `http://localhost:3000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend development server:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 📁 Project Structure

```
QuickChat-App/
├── backend/                 # Backend Node.js API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── lib/            # Utilities & config
│   │   ├── emails/         # Email templates
│   │   └── server.js       # Entry point
│   ├── package.json
│   └── .env
│
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand stores
│   │   ├── lib/           # Utilities
│   │   ├── hooks/         # Custom hooks
│   │   ├── App.jsx        # Root component
│   │   └── main.jsx       # Entry point
│   ├── public/
│   │   └── sounds/        # Sound effects
│   ├── package.json
│   └── .env
│
└── README.md              # This file
```

---

## 🔌 API Documentation

### Authentication Endpoints

```http
POST   /api/auth/signup           # Create new account
POST   /api/auth/login            # Login user
POST   /api/auth/logout           # Logout user
GET    /api/auth/check            # Check auth status
PUT    /api/auth/update-profile   # Update user profile
```

### Message Endpoints

```http
GET    /api/messages/contacts     # Get all users
GET    /api/messages/chats        # Get chat partners
GET    /api/messages/:userId      # Get messages with user
POST   /api/messages/send/:userId # Send message to user
```

### Socket.io Events

**Client → Server:**

- `typing` - User started typing
- `stopTyping` - User stopped typing

**Server → Client:**

- `getOnlineUsers` - Online user IDs array
- `newMessage` - New message received
- `userTyping` - Someone is typing
- `userStoppedTyping` - Someone stopped typing

---

## 🖼️ Screenshots

### Chat Interface

![Chat Interface](frontend/public/Screenshot%20from%202025-11-05%2001-43-01.png)

### Login Page

![Login Page](frontend/public/Screenshot%20from%202025-11-05%2001-43-22.png)

### Sign Up Page

![Sign Up Page](frontend/public/Screenshot%20from%202025-11-05%2001-43-28.png)

---

## 🎯 Key Features Explained

### Real-Time Messaging

Messages are delivered instantly using Socket.io WebSocket connections. The app maintains persistent connections for real-time updates.

### Typing Indicators

When a user types, a "typing..." indicator appears for the recipient. It automatically disappears after 2 seconds of inactivity.

### Optimistic Updates

Messages appear immediately in the sender's UI before server confirmation, providing a smooth user experience.

### Online Status

Users see real-time online/offline status indicators next to contacts using Socket.io presence tracking.

### Image Sharing

Images are uploaded to Cloudinary with automatic optimization. Base64 encoded images are sent via API with a 10MB limit.

### Sound Effects

- Keyboard typing sounds
- Message notification sounds
- UI interaction sounds (toggle on/off)

---

## 🔐 Security Features

- **JWT Authentication** - Secure token-based auth
- **HTTP-Only Cookies** - Prevents XSS attacks
- **Password Hashing** - bcrypt with salt rounds
- **Rate Limiting** - Arcjet protection
- **CORS Protection** - Configured origins
- **Input Validation** - Server-side validation
- **SQL Injection Prevention** - MongoDB/Mongoose protection

---

## 🚦 Environment Variables

### Backend Variables

| Variable                | Description               | Required           |
| ----------------------- | ------------------------- | ------------------ |
| `PORT`                  | Server port               | No (default: 3000) |
| `MONGODB_URI`           | MongoDB connection string | Yes                |
| `JWT_SECRET`            | JWT signing key           | Yes                |
| `NODE_ENV`              | Environment mode          | Yes                |
| `CLIENT_URL`            | Frontend URL for CORS     | Yes                |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name     | Yes                |
| `CLOUDINARY_API_KEY`    | Cloudinary API key        | Yes                |
| `CLOUDINARY_API_SECRET` | Cloudinary secret         | Yes                |
| `RESEND_API_KEY`        | Resend email API key      | Yes                |
| `ARCJET_KEY`            | Arcjet security key       | Yes                |

### Frontend Variables

| Variable       | Description     | Required |
| -------------- | --------------- | -------- |
| `VITE_API_URL` | Backend API URL | Yes      |

---

## 📜 Available Scripts

### Backend

```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### Frontend

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

### Backend (Render/Railway/Heroku)

1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

### Frontend (Vercel/Netlify)

1. Run `npm run build` in frontend directory
2. Deploy `dist` folder
3. Set `VITE_API_URL` environment variable
4. Configure redirects for SPA routing

### Production Build

```bash
# Backend
cd backend && npm start

# Frontend
cd frontend && npm run build
```

---

## 🐛 Troubleshooting

### Common Issues

**Socket connection failed:**

- Check if backend is running
- Verify `VITE_API_URL` in frontend `.env`
- Check CORS settings in backend

**MongoDB connection error:**

- Verify `MONGODB_URI` is correct
- Check MongoDB service is running
- Ensure network access for MongoDB Atlas

**Images not uploading:**

- Verify Cloudinary credentials
- Check image size (max 10MB)
- Ensure base64 encoding is correct

**Authentication issues:**

- Clear browser cookies
- Check JWT_SECRET is set
- Verify token expiration

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use ESLint configuration
- Follow React best practices
- Write descriptive commit messages
- Add comments for complex logic

---

## 👨‍💻 Author

**Niladrim14**

- GitHub: [@Niladrim14](https://github.com/Niladrim14)
- Repository: [QuickChat-App](https://github.com/Niladrim14/QuickChat-App)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Socket.io](https://socket.io/) - Real-time engine
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Cloudinary](https://cloudinary.com/) - Image hosting
- [Resend](https://resend.com/) - Email service
- [Arcjet](https://arcjet.com/) - Security platform
- [Lucide Icons](https://lucide.dev/) - Icon library

---

## 🎯 Future Roadmap

- [ ] 🎤 Voice Messages
- [ ] 📹 Video Calls
- [ ] 📎 File Sharing (PDFs, Documents)
- [ ] 😀 Message Reactions
- [ ] ✅ Read Receipts
- [ ] 👥 Group Chats
- [ ] 🔍 Message Search
- [ ] 🌓 Dark/Light Theme Toggle
- [ ] 🔔 Push Notifications
- [ ] 📍 Location Sharing
- [ ] 🗂️ Message Categories/Tags
- [ ] 🔐 End-to-End Encryption

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/Niladrim14/QuickChat-App?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Niladrim14/QuickChat-App?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Niladrim14/QuickChat-App)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Niladrim14/QuickChat-App)

---

<div align="center">

**⭐ Star this repo if you find it useful! ⭐**

Made with ❤️ and ☕ by [Niladrim14](https://github.com/Niladrim14)

</div>
