import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAxmVerP7Ycp-mKkWcWt8avH4uvlKNgjlw',
	authDomain: 'react-study-b449a.firebaseapp.com',
	databaseURL: 'https://react-study-b449a-default-rtdb.firebaseio.com',
	projectId: 'react-study-b449a',
	storageBucket: 'react-study-b449a.appspot.com',
	messagingSenderId: '74968759098',
	appId: '1:74968759098:web:4c2b32e4e2f3ad01ff2e03',
	measurementId: 'G-W105PBV7G6',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
