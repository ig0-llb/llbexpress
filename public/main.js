import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Hubungkan ke firebaseConfig.js

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