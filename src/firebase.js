// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI-fsTl_UwpVJvBMP-DBDK-Ke2-eZAu2Q",
  authDomain: "kanapkaman-software-house.firebaseapp.com",
  projectId: "kanapkaman-software-house",
  storageBucket: "kanapkaman-software-house.appspot.com",
  messagingSenderId: "595802829022",
  appId: "1:595802829022:web:1f72b6a969c08a43edd24f",
  measurementId: "G-XPBYXCMR7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const usersCollection = collection(db, 'blogs');

// function for fetching all the blog posts
export const getBlogs = async () => {
    try {
      const querySnapshot = await getDocs(usersCollection);
  
      const blogs = [];
      querySnapshot.forEach((doc) => {
        // Access all fields from the document
        const data = doc.data();
        blogs.push(data);
      });
  
      return blogs;
    } catch (error) {
      console.error('Error getting blogs:', error);
      throw error;
    }
  };