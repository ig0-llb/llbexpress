import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { db } from "./firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// ⬇️ Tambahkan di sini
async function tampilkanDaftarKurir() {
  const tbody = document.getElementById("couriersTableBody");
  if (!tbody) return;

  tbody.innerHTML = ""; // Bersihkan isian lama

  const snapshot = await getDocs(collection(db, "users"));
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.role === "kurir") {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${data.username}</td>
        <td>${data.nama}</td>
        <td>0</td>
        <td><button class="btn btn-danger btn-sm" onclick="hapusKurir('${doc.id}')">Hapus</button></td>
      `;
      tbody.appendChild(tr);
    }
  });
}

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
document.addEventListener("DOMContentLoaded", tampilkanDaftarKurir);