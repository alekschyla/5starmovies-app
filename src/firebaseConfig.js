import firebase from 'firebase';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB3HU_2UB21SLEDcWfYMw9T8a6WRjHsf2Q",
    authDomain: "starmovies-app.firebaseapp.com",
    databaseURL: "https://starmovies-app.firebaseio.com",
    projectId: "starmovies-app",
    storageBucket: "starmovies-app.appspot.com",
    messagingSenderId: "689938503254"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();