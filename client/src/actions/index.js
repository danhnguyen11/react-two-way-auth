import firebase from '../components/firebase/firebase';
import {reset} from 'redux-form';
import axios from 'axios';

export const initLogin = ({ email, password }) => async dispatch => {
    try {
       const res = await firebase.auth().signInWithEmailAndPassword(email,password);
       return res;
    } catch (err) {
        dispatch(reset('loginForm'));
        dispatch({ type: "LOGIN_ERROR", payload: err.message})
    }
}

export const login = (user) => {
    return ({ type: "LOG_IN", payload: user })
}

export const logout = () => {
    return ({ type: "LOG_OUT" })
}

export const initLogout = () => {
    return () => {
        return firebase.auth().signOut()
                .catch((err) => {
                    return err;
                })
      };
}

export const googleLogin = () => {
    return () => {
      let googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(googleAuthProvider)
                .catch((err) => {
                    console.log(err);
                    return err;
                })
    };
};

export const gitLogin = () => {
    return () => {
      let gitAuthProvider = new firebase.auth.GithubAuthProvider();
      return firebase.auth().signInWithPopup(gitAuthProvider)
                .catch((err) => {
                    console.log(err);
                    return err;
                })
    };
};

export const initSignUp = ({ email,password }) => async dispatch => {
    try {
       const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
       return res;
    } catch(err) {
        dispatch(reset('signupForm'));        
        dispatch({ type: "SIGNUP_ERROR", payload: err.message })
    }    
}

export const clearError = () => dispatch => {
    dispatch({ type: "CLEAR_ERROR" })
}

export const fetchQuote = () => async dispatch => {
    const res = await axios.get("https://quote-api-no-auth.herokuapp.com/rand")
    dispatch({ type: "FETCH_QUOTE", payload: res.data })
}