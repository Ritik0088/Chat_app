# Real-Time Group Chat App

A real-time group chat application built with React and Socket.io. Users enter a name, join a shared room and chat instantly with live typing indicators.

## Features
- Name prompt before joining the chat
- All users join a single shared group room
- Instant message broadcast to everyone else in the room via WebSockets
- Live "typing..." indicator (stops after 1 second of inactivity)
- Message timestamps (HH:MM)
- Enter to send (Shift+Enter for a new line)
- Responsive UI styled with Tailwind CSS

## Tech Stack
- **Frontend:** React 19, Vite, Tailwind CSS 4, socket.io-client
- **Backend:** Node.js, Express 5, Socket.io 4

## Setup

### Backend
```bash
cd backend
npm install
node server.js      # http://localhost:4600
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
> The frontend connects to the deployed server (`https://chat-app-k41z.onrender.com/`) in `frontend/src/ws.js`. Change it to `http://localhost:4600` to use your local backend.

## Socket Events
| Event | Purpose |
|-------|---------|
| `joinRoom` | join the group with a username |
| `roomNotice` | notify others that a user joined |
| `chatMessage` | send / receive messages |
| `typing` / `stopTyping` | typing indicator |

## Project Structure
```
backend/server.js     # Express + Socket.io server
frontend/src/App.jsx  # chat UI and socket logic
frontend/src/ws.js    # socket connection
```

## Author
**Ritik Kumar**
