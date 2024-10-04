import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABPs9oI7y1amwGIZmoy4AhIIsL6QoU9Oo",
  authDomain: "book-website-4a5a2.firebaseapp.com",
  projectId: "book-website-4a5a2",
  storageBucket: "book-website-4a5a2.appspot.com",
  messagingSenderId: "431421681295",
  appId: "1:431421681295:web:c17558762e072505864afa",
  measurementId: "G-PLZDBVP32V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default { auth }