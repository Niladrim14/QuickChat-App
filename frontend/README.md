# QuickChat Frontend

A modern, real-time chat application built with React, Vite, and Socket.io with a beautiful emerald-themed UI.

## 🚀 Features

- **Real-time Messaging** - Instant message delivery with Socket.io
- **Typing Indicators** - See when others are typing
- **Online Status** - Real-time user presence tracking
- **Image Sharing** - Send and receive images
- **Sound Effects** - Keyboard sounds and notifications
- **Optimistic Updates** - Immediate UI feedback
- **Responsive Design** - Mobile-friendly interface
- **Cinematic UI** - Movie poster-style image transitions
- **Auto-scroll** - Smooth scroll to latest messages
- **Profile Management** - Update profile pictures
- **Contact Management** - View all users and chat history

## 🎨 Design Features

- **Emerald Green Theme** - Modern, cohesive color scheme
- **Animated Borders** - Rotating gradient border effects
- **Glass Morphism** - Backdrop blur effects
- **Smooth Transitions** - Cinematic hover effects on images
- **Film Grain** - Vintage poster aesthetics
- **Custom Animations** - Bounce, fade, and scale effects

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Zustand** - State management
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running

## 🔧 Installation

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The app will run on `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable components
│   │   ├── ActiveTabSwitch.jsx
│   │   ├── BoarderAnimatedContainer.jsx
│   │   ├── ChatContainer.jsx
│   │   ├── ChatHeader.jsx
│   │   ├── ChatList.jsx
│   │   ├── ContactList.jsx
│   │   ├── MeassageInput.jsx
│   │   ├── NoChatsFound.jsx
│   │   ├── NoChatHistoryPlaceholder.jsx
│   │   ├── NoConversationPlaceHolder.jsx
│   │   ├── PageLoader.jsx
│   │   ├── ProfileHeader.jsx
│   │   ├── MessagesLoadingSkeleton.jsx
│   │   └── UsersLoadingSkeleton.jsx
│   ├── pages/            # Page components
│   │   ├── ChatPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── SignUpPage.jsx
│   ├── store/            # Zustand stores
│   │   ├── useAuthStore.js
│   │   └── useChatstore.js
│   ├── lib/              # Utilities
│   │   └── axios.js
│   ├── hooks/            # Custom hooks
│   │   └── useKeyboardSound.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/
│   └── sounds/           # Sound effects
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎯 Key Components

### **ChatPage**

Main chat interface with sidebar and message area

### **ChatContainer**

Displays messages, typing indicators, and handles real-time updates

### **MessageInput**

Text input with image upload, typing events, and sound effects

### **ProfileHeader**

User profile with avatar, online status, and settings

### **BoarderAnimatedContainer**

Animated gradient border wrapper component

## 🔌 Socket.io Integration

### Events Listened

- `getOnlineUsers` - Updates online user list
- `newMessage` - Receives new messages
- `userTyping` - Shows typing indicator
- `userStoppedTyping` - Hides typing indicator

### Events Emitted

- `typing` - When user starts typing
- `stopTyping` - When user stops typing

## 📦 State Management (Zustand)

### **useAuthStore**

- User authentication
- Socket connection management
- Online users tracking
- Profile updates

### **useChatStore**

- Message management
- Contact/chat list
- Active tab state
- Typing indicators
- Sound preferences

## 🎨 Styling

### Theme Colors

- **Primary:** Emerald (Green)
- **Background:** Slate-950, Slate-800
- **Text:** Slate-200, Slate-400
- **Accents:** Emerald-400, Emerald-500, Emerald-600

### Custom CSS Classes

```css
.input
  -
  Input
  field
  styling
  .auth-btn
  -
  Primary
  button
  .auth-link
  -
  Link
  styling
  .badge
  -
  Badge
  component;
```

## 🔊 Sound Effects

- **Keyboard Sounds** - Random typing sounds
- **Notification Sound** - New message alert
- **Click Sounds** - UI interaction feedback

Sounds can be toggled on/off per user preference.

## 🖼️ Image Features

- **Cinematic Poster Effect** - Grayscale with hover color reveal
- **Film Grain Overlay** - Vintage aesthetic
- **Vignette Effect** - Dark edges for depth
- **Smooth Transitions** - 700ms ease-in-out
- **Profile Picture Upload** - Base64 encoding with preview

## 🚀 Build & Deployment

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📝 Environment Variables

| Variable       | Description     | Default               |
| -------------- | --------------- | --------------------- |
| `VITE_API_URL` | Backend API URL | http://localhost:3000 |

## 🎭 UI Components

### **Typing Indicator**

Animated three-dot bounce effect

### **Message Bubbles**

Different colors for sent/received messages

### **Loading Skeletons**

Smooth loading states for users and messages

### **Toast Notifications**

Success/error messages with React Hot Toast

## 🔐 Authentication Flow

1. User signs up/logs in
2. JWT token stored in HTTP-only cookie
3. Socket connection established
4. Real-time updates enabled

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Adaptive layouts for different screen sizes
- Touch-friendly interface

## ⚡ Performance Optimizations

- **Optimistic Updates** - Immediate UI feedback
- **Code Splitting** - React.lazy for routes
- **Image Optimization** - Cloudinary transformations
- **Debounced Typing** - 2s timeout for typing indicators
- **Memoization** - useCallback for event handlers

## 🐛 Error Handling

- Network error toasts
- Fallback UI for errors
- Graceful degradation
- Socket reconnection logic

## 📜 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎯 Future Enhancements

- [ ] Voice messages
- [ ] Video calls
- [ ] File sharing
- [ ] Message reactions
- [ ] Read receipts
- [ ] Group chats
- [ ] Message search
- [ ] Dark/Light theme toggle

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

- React team for the amazing library
- Vite for blazing fast builds
- Tailwind CSS for utility-first styling
- Socket.io for real-time magic
