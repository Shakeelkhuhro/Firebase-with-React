import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDrnHP2eJlKJNkghChTd-ONiFLX1x_QEN8",
    authDomain: "fir-auth1-7d981.firebaseapp.com",
    projectId: "fir-auth1-7d981",
    storageBucket: "fir-auth1-7d981.appspot.com",
    messagingSenderId: "706655257548",
    appId: "1:706655257548:web:ae297ec12a71eddcb05369"
};

export const app = initializeApp(firebaseConfig);