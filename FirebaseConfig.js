// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyCMpWWKeUpA2nkWQmYnxJf0yKYDjcs1T4A",
  authDomain: "rnativeproject-bd116.firebaseapp.com",
  projectId: "rnativeproject-bd116",
  storageBucket: "rnativeproject-bd116.appspot.com",
  messagingSenderId: "1092760498196",
  appId: "1:1092760498196:web:251b019da68fe2572cb701",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;
