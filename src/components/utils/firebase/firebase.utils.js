// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import  {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJUOm6IgxFryfsq7mkoAJnrecDLELgDU4",
  authDomain: "crwn-db-45ad0.firebaseapp.com",
  projectId: "crwn-db-45ad0",
  storageBucket: "crwn-db-45ad0.appspot.com",
  messagingSenderId: "486590601761",
  appId: "1:486590601761:web:9c28d4031578b495e96160"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch(error){
            console.log('error creating the user', error);
        }

    }


    return userDocRef;
    //check if user data exists
    // else add to db
    // return userdocref
}