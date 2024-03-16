import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEMttzlnYZqrB_nEmZLYBrgzUF0TBZwqA",
  authDomain: "jobboard-31aa9.firebaseapp.com",
  projectId: "jobboard-31aa9",
  storageBucket: "jobboard-31aa9.appspot.com",
  messagingSenderId: "596995321579",
  appId: "1:596995321579:web:cb74a364fed5ebba7018ae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUpWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};
export const logOut = () => {
    return signOut(auth);
};
export { auth};
