import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyCC7M2hi7MriBKQ1JOlxd1LBOU-S1K6_3E",
  authDomain: "reactauthentication-63d94.firebaseapp.com",
  projectId: "reactauthentication-63d94",
  storageBucket: "reactauthentication-63d94.appspot.com",
  messagingSenderId: "226686810279",
  appId: "1:226686810279:web:68f3d5bb193e1256f44382",
  measurementId: "G-WJQP4RE63E"
});

export const auth = getAuth(app);
export const google = new GoogleAuthProvider();