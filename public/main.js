import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { db } from "./firebaseConfig.js";

async function tambahUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      nama: "Teguh",
      umur: 25
    });
    console.log("Dokumen berhasil ditambahkan dengan ID:", docRef.id);
  } catch (error) {
    console.error("Error menambahkan dokumen:", error);
  }
}

tambahUser();