// FIREBASE APP
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// FIRESTORE
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmMsfAhlIh63EGQHRH0nvN8KSWpX-PYMY",
  authDomain: "projeto-a5-grupo.firebaseapp.com",
  projectId: "projeto-a5-grupo",
  storageBucket: "projeto-a5-grupo.firebasestorage.app",
  messagingSenderId: "302369696603",
  appId: "1:302369696603:web:50b0a12fd2832d2b1c087e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);