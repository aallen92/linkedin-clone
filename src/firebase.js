import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB4XKibVVz5Isp-0v94Xe_lp81h5ntRBgI",
    authDomain: "linkedin-clone-cohort.firebaseapp.com",
    projectId: "linkedin-clone-cohort",
    storageBucket: "linkedin-clone-cohort.appspot.com",
    messagingSenderId: "1031043300342",
    appId: "1:1031043300342:web:26a5e69729625efed725d7",
    measurementId: "G-08LSJDCERV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const auth = firebase.auth();

  export { db, increment, auth };