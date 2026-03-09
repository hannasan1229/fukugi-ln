// ❌ KEIN Vue
// ❌ KEIN App.vue

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWvHMJK5dJIFFS0zvz2fNQLx8S5PRdnuY",
  authDomain: "konoha-tech.firebaseapp.com",
  projectId: "konoha-tech",
  storageBucket: "konoha-tech.firebasestorage.app",
  messagingSenderId: "267403843062",
  appId: "1:267403843062:web:ec3761016ad53f78eb63d7"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

// Optional: Legacy-Zugriff
window.db = db

export { db }
