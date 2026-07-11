# 🎬 VidStream Pro - Telegram Mini App Video Platform

A professional video platform for Telegram Mini Apps with Admin Panel.

## 🌟 Features

### User Panel (`index.html`)
- 📺 Watch videos with professional player
- 🔍 Search videos
- 📂 Browse by categories
- ❤️ Like & comment
- 📱 Mobile responsive
- 🎯 Auto ads (AdsGram & Monetag)

### Admin Panel (`admin.html`)
- 📊 Dashboard with statistics
- 📤 Upload videos (URL-based)
- 💰 Ad management (AdsGram Block ID + Monetag Zone ID)
- ⏱️ Mid-roll ad timer settings
- 👥 User management
- 💬 Comment management
- 📂 Category management
- ⚡ Site settings

## 🚀 Quick Start

### 1. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Enable Firestore Database
5. Enable Storage
6. Copy your Firebase config

### 2. Configure Firebase
Open `js/firebase-config.js` and replace with your config:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBg-Og3zeSeel6OSCUyM_hqId0c8ADrYYg",
  authDomain: "vid-stream-dc255.firebaseapp.com",
  databaseURL: "https://vid-stream-dc255-default-rtdb.firebaseio.com",
  projectId: "vid-stream-dc255",
  storageBucket: "vid-stream-dc255.firebasestorage.app",
  messagingSenderId: "162709804261",
  appId: "1:162709804261:web:5ef91eeb93cc61d616700c",
  measurementId: "G-MHYRKFCMLE"
};
