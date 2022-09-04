// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC5lSOuak8y05OpsG_o5WjcGkJvJHDbu2c",
	authDomain: "grocelist-asd-group8.firebaseapp.com",
	projectId: "grocelist-asd-group8",
	storageBucket: "grocelist-asd-group8.appspot.com",
	messagingSenderId: "885258181752",
	appId: "1:885258181752:web:b23c96f643e01a0411e18d",
	measurementId: "G-VTMZYYNDGL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
