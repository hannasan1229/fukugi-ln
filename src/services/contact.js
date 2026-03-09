import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Speichert eine Kontaktanfrage in Firestore.
 * E-Mails werden ausschließlich serverseitig
 * über Firebase Functions + Zoho ausgelöst.
 *
 * TTL: Dokumente werden automatisch gelöscht (expiresAt).
 *
 * @param {string} name
 * @param {string} email
 * @param {string} message
 * @param {string} lang - "de" | "en" | "jp"
 */

export async function sendContactRequest(name, email, message, lang = "de") {
  if (!name || !email || !message) {
    throw new Error("Bitte alle Felder ausfüllen");
  }

  await addDoc(collection(db, "contactRequests"), {
    name,
    email,
    message,
    lang,

    createdAt: serverTimestamp(),

    // 🔥 TTL-Feld
    expiresAt: new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 90 // 90 Tage
    ),

    source: "website",
  });
}