import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB_k9ukculkxZUe_OxnIu8EO0SL6c-RLPI',
  authDomain: 'music-168bc.firebaseapp.com',
  projectId: 'music-168bc',
  storageBucket: 'music-168bc.appspot.com',
  messagingSenderId: '720398875978',
  appId: '1:720398875978:web:341f2d9b15b34ccb2dd5b3',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log('Firebase persistence error', error);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { auth, db, usersCollection, songsCollection, commentsCollection, storage };
