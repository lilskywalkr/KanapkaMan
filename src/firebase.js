// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, addDoc } from 'firebase/firestore';
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
const blogsCollection = collection(db, 'blogs');
const contactsCollection = collection(db, 'contacts');

// function for fetching all the blog posts
export const getBlogs = async () => {
    try {
      const querySnapshot = await getDocs(blogsCollection);
  
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

  // function for fetching a specific blog post
  export const getBlogPostById = async (postId) => {
    try {
      const q = query(blogsCollection, where("id", "==", Number(postId)));
      const querySnapshot = await getDocs(q);

      const blogPost = [];
      querySnapshot.forEach((doc) => {
        // Access all fields from the document
        const data = doc.data();
        blogPost.push(data);
      });
      
      return blogPost;
    } catch (error) {
      console.error('Error getting a blog post of an id ' + postId);
      throw error;
    }
  }

  // add a document in contact collection
  export const setContact = async (name, email, number, topic, message) => {
    try {
      await addDoc(contactsCollection, {
        name: name,
        email: email,
        number: number,
        topic: topic,
        message: message
      });
    } catch (error) {
      console.error('Error getting a blog post of an id ' + postId);
      throw error;
    }
  }