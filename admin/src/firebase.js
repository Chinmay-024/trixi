import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.APP_KEY,

	authDomain: "trixi-87721.firebaseapp.com",

	projectId: "trixi-87721",

	storageBucket: "trixi-87721.appspot.com",

	messagingSenderId: "246264488910",

	appId: "1:246264488910:web:8a92ae689a179e0879c19f",

	measurementId: "G-8FTJR17ZPQ",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
