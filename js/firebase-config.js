// Firebase Configuration
// ⚠️ IMPORTANT: আপনার Firebase প্রজেক্টের তথ্য এখানে বসান
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
