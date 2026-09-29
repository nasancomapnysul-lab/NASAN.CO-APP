/* Firebase settings for nasan Company — project nasan-co-team (web app: nasan web).
   All app data lives under /nasan in the Realtime Database (europe-west1). */
window.NASAN_FIREBASE = {
  apiKey: 'AIzaSyBCg5D80QGl-8aE_qX7RPtu7b403ssjKQc',
  authDomain: 'nasan-co-team.firebaseapp.com',
  databaseURL: 'https://nasan-co-team-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nasan-co-team',
  storageBucket: 'nasan-co-team.firebasestorage.app',
  messagingSenderId: '244992145213',
  appId: '1:244992145213:web:0f664ef6518d8e2aedb754',
  measurementId: 'G-6ZWXTYKZJ7',
};
if (!window.NASAN_FIREBASE.apiKey) window.NASAN_FIREBASE = null;

/* Only this Firebase Authentication user can edit the app. */
window.NASAN_ADMIN_UID = 'TBDbDUsR9ANLY8Gfmeb6D7obi5z2';
