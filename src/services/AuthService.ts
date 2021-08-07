import { firebaseApp } from '../core/firebase';
import  firebase  from 'firebase';

class AuthService {

  async emailSignUp(email:string, password:string) : Promise<firebase.User | null> {
    const result =  await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    return result.user;
  }

  async emailSignIn(email:string, password:string) : Promise<void> {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }
}

export default AuthService;