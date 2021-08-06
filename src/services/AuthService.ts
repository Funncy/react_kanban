import { firebaseApp } from '../core/firebase';

class AuthService {

  async emailSignUp(email:string, password:string) : Promise<void> {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }

  async emailSignIn(email:string, password:string) : Promise<void> {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }
}

export default AuthService;