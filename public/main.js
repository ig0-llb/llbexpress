import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { db } from "./firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Masih login sebagai:", user.email);
    tambahUser(); // jalankan hanya jika login aktif
  } else {
    window.location.href = "login.html"; // redirect kalau belum login
  }
});
async function tambahUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      nama: "Teguh",
      umur: 25
    });
    document.getElementById("statusUser").textContent = "✅ Data berhasil ditambahkan!";
    console.log("Dokumen berhasil ditambahkan dengan ID:", docRef.id);
  } catch (error) {
    console.error("Error menambahkan dokumen:", error);
  }
}
