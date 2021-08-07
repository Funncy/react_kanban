import { atom, selector, selectorFamily } from 'recoil';
import firebase from 'firebase';
import AuthService from '../services/AuthService';

export const UserState = atom<firebase.User | null>({
	key: 'firebaseUser',
	default: null,
});
