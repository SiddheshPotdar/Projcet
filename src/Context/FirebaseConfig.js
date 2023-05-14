// ! Firebse imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCKNyo4RjM_LLlGsL3XD9meLuafoAbSEsY",
	authDomain: "smart-helmet-44801.firebaseapp.com",
	databaseURL: "https://smart-helmet-44801-default-rtdb.firebaseio.com",
	projectId: "smart-helmet-44801",
	storageBucket: "smart-helmet-44801.appspot.com",
	messagingSenderId: "924464593286",
	appId: "1:924464593286:web:c7e8a16e4e82e202add407",
	measurementId: "G-P8V4DHCBFF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const auth = getAuth(app);
