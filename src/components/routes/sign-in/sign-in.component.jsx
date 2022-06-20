import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(async () => { const response = await getRedirectResult(auth); 
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }; 
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignUpForm></SignUpForm>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
    </div>
  );
};

export default SignIn;
