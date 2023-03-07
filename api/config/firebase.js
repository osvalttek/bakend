// import { initializeApp } from "firebase/app";
import "dotenv/config"

const apiKey = process.env.API_KEY
const authDomain = process.env.AUTH_DOMAIN
const projectId = process.env.PROJECT_ID
const storageBucket = process.env.STORAGE_BUCKET
const messagingSenderId = process.env.MESSAGING_SENDER_ID
const appId = process.env.APP_ID

export const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

// initializeApp(firebaseConfig);