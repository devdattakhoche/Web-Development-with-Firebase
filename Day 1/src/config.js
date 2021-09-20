const firebaseConfig = {
  // Add your Credentials here
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth;
const storage = firebase.storage();

export { db, auth, storage };
