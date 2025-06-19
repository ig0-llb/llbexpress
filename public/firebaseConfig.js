import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5bzEyULAAx1IQo_Zicas4ikbkK7gUklU",
  authDomain: "llb-express.firebaseapp.com",
  projectId: "llb-express",
  storageBucket: "llb-express.firebasestorage.app",
  messagingSenderId: "725553239087",
  appId: "1:725553239087:web:d84b63f122c81d7d3562da"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };