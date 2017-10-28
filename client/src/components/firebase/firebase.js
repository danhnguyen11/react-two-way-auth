import * as firebase from 'firebase';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

const config = {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    databaseURL: env.FIREBASE_DATABASE_URL,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;