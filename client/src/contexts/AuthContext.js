import React, { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../utils/init-firebase';

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	confirmPasswordReset,
} from 'firebase/auth';

const AuthContext = createContext({
	currentUser: null,
	signInWithGoogle: () => Promise,
	login: () => Promise,
	register: () => Promise,
	logout: () => Promise,
	//forgotPassword: () => Promise,
	//resetPassword: () => Promise,
});

const uri = 'http://localhost:5000/api';

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		/*   const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    } */
	}, []);

	useEffect(() => {
		console.log('The user is', currentUser);
	}, [currentUser]);

	function signInWithGoogle(tokenId) {
		/* const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider); */

		try {
			const dataFromServer = await fetch(uri + '/googlelogin', {
				method: 'POST',
				body: new URLSearchParams({
					idToken: `${tokenId}`,
				}),
			});
			const finalData = await dataFromServer.json();
			console.log('data Server', finalData);
		} catch (error) {
			console.log('error en catch', error);
		}
	}

	function login(email, password) {
		//return signInWithEmailAndPassword(auth, email, password);
	}

	function register(email, password) {
		//return createUserWithEmailAndPassword(auth, email, password);
	}

	function forgotPassword(email) {
		/* 	return sendPasswordResetEmail(auth, email, {
			url: `http://localhost:3000/login`,
		}); */
	}

	function resetPassword(oobCode, newPassword) {
		//return confirmPasswordReset(auth, oobCode, newPassword);
	}

	function logout() {
		//return signOut(auth);
	}

	const value = {
		currentUser,
		signInWithGoogle,
		login,
		register,
		logout,
		forgotPassword,
		resetPassword,
	};
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
