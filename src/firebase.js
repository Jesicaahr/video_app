// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6KTgfHqj4Yjf_khneBjBtSHjr6Zlg73g',
  authDomain: 'traveltube-72ed6.firebaseapp.com',
  projectId: 'traveltube-72ed6',
  storageBucket: 'traveltube-72ed6.appspot.com',
  messagingSenderId: '730013318417',
  appId: '1:730013318417:web:cd6f9becc60b758a90e0b0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
