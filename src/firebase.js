// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDOzdQx0_UzrNaOh3DV9Xa0U8m5JDXH3c",
  authDomain: "green-commerce-ae779.firebaseapp.com",
  projectId: "green-commerce-ae779",
  storageBucket: "green-commerce-ae779.firebasestorage.app",
  messagingSenderId: "933127450101",
  appId: "1:933127450101:web:68649a6c604150682144bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;