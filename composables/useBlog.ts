// Import the functions you need from the SDKs you need
import { and, collection, getDocs, query, where } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// function for fetching all the blog posts
export function useBlog() {
  const { firestore } = useFirebase()
  const blogsCollection = collection(firestore, 'blogs')

  async function getBlogs() {
    try {
      const querySnapshot = await getDocs(blogsCollection)

      const blogs: any = []
      querySnapshot.forEach((doc) => {
        // Access all fields from the document
        const data = doc.data()
        blogs.push(data)
      })

      return blogs
    }
    catch (error) {
      console.error('Error getting blogs:', error)
      throw error
    }
  }

  async function getBlogsLanguage(locale: string) {
    try {
      const q = query(blogsCollection, where('lang', '==', locale))
      const querySnapshot = await getDocs(q)

      const blogs: any = []
      querySnapshot.forEach((doc) => {
        // Access all the fields from the document
        const data = doc.data()
        blogs.push(data)
      })

      return blogs
    }
    catch (error) {
      console.error('Error getting blogs: ', error)
      throw error
    }
  }

  async function getBlogPostById(postId: string, locale: string) {
    try {
      const q = query(blogsCollection, and(where('id', '==', Number(postId)), where('lang', '==', String(locale))))
      const querySnapshot = await getDocs(q)

      const blogPost: any = []
      querySnapshot.forEach((doc) => {
        // Access all fields from the document
        const data = doc.data()
        blogPost.push(data)
      })

      return blogPost
    }
    catch (error) {
      console.error(`Error getting a blog post of an id ${postId}`)
      throw error
    }
  }

  return {
    getBlogs,
    getBlogsLanguage,
    getBlogPostById,
  }
}
