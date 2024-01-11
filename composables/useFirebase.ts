import type { Firestore } from 'firebase/firestore'

export function useFirebase() {
  const nuxtApp = useNuxtApp()

  const firestore = nuxtApp.$firestore as Firestore

  return {
    firestore,
  }
}
