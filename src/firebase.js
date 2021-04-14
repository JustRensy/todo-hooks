import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyA8CSMOp1vbXmBbtc1iHzu8woeceIiNWqA',
	authDomain: 'todo-hooks-f9793.firebaseapp.com',
	projectId: 'todo-hooks-f9793',
	storageBucket: 'todo-hooks-f9793.appspot.com',
	messagingSenderId: '654171225216',
	appId: '1:654171225216:web:d7fe133290a00c1c7aba65',
});

const db = firebaseApp.firestore();

export { db };
