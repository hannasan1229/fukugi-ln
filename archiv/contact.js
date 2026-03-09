import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export async function sendContactRequest(name, email, message) {
  if (!name || !email || !message) {
    throw new Error('Bitte alle Felder ausfüllen')
  }

  // Anfrage speichern
  await addDoc(collection(db, 'contactRequests'), {
    name,
    email,
    message,
    createdAt: serverTimestamp()
  })

  // Mail an dich
  await addDoc(collection(db, 'mail'), {
    to: 'contact@fukugi-ln.com',
    replyTo: email,
    message: {
      subject: `Neue Anfrage von ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `
    }
  })

  // Auto-Reply an Absender
  await addDoc(collection(db, 'mail'), {
    to: email,
    message: {
      subject: 'Vielen Dank für Ihre Anfrage',
      html: `
        <p>Liebe/r ${name},</p>

        <p>vielen Dank für Ihre Nachricht.
        Ich melde mich so schnell wie möglich bei Ihnen.</p>

        <p>Mit freundlichen Grüßen<br/>
        Maho Fukuda</p>
      `
    }
  })
}