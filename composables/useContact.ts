// Import the functions you need from the SDKs you need
import { addDoc, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// function for fetching all the blog posts
export function useContact() {
  const { firestore } = useFirebase()
  const contactsCollection = collection(firestore, 'contacts')

  async function setContact(name: string, email: string, number: string, topic: string, message: string) {
    try {
      await addDoc(contactsCollection, {
        name,
        email,
        number,
        topic,
        message,
      })
    }
    catch (error) {
      console.error(`Error: ${error}`)
      throw error
    }
  }

  return {
    setContact,
  }
}
