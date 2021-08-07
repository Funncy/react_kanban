import { atom } from 'recoil';
import firebase from 'firebase';

type AuthState = firebase.User | null;

export const UserState = atom<AuthState>({
	key: 'firebaseUser',
	default: null,
	dangerouslyAllowMutability: true,
});
