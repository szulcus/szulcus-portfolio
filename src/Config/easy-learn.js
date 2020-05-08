import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/functions'
import 'firebase/storage'

const easyLearnConfig = {
    apiKey: "AIzaSyCQuZoXusa7EqGQdCmmoQAi4DegvYs-GvY",
    authDomain: "easyword.firebaseapp.com",
    databaseURL: "https://easyword.firebaseio.com",
    projectId: "easyword",
    storageBucket: "easyword.appspot.com",
    messagingSenderId: "306976829495",
    appId: "1:306976829495:web:c38717ace4dccb27f7cfb2",
    measurementId: "G-G5BSTPZ0LH"
};
var epicGamesConfig = {
  apiKey: "AIzaSyCkYbGdlWeqwtQpMxLE0V7VsJaQaE7RxbI",
  authDomain: "egszulcus.firebaseapp.com",
  databaseURL: "https://egszulcus.firebaseio.com",
  projectId: "egszulcus",
  storageBucket: "egszulcus.appspot.com",
  messagingSenderId: "228488156746",
  appId: "1:228488156746:web:22d9c023aa9959c79178b3",
  measurementId: "G-JVX77JVRKV"
};

firebase.initializeApp(easyLearnConfig);
firebase.firestore().settings({});
const epicGames = firebase.initializeApp(epicGamesConfig, "secondary");

const easyLearnDb = firebase.firestore();
const easyLearnAu = firebase.auth();
const easyLearnAuth = firebase.auth;
const easyLearnFu = firebase.functions();
const easyLearnSt = firebase.storage();

const epicGamesDb = epicGames.firestore();
const epicGamesAu = epicGames.auth();
const epicGamesAuth = epicGames.auth;
const epicGamesFu = epicGames.functions();
const epicGamesSt = epicGames.storage();

export {
    easyLearnDb,
    easyLearnAu,
    easyLearnAuth,
    easyLearnFu,
    easyLearnSt,
    
    epicGamesDb,
    epicGamesAu,
    epicGamesAuth,
    epicGamesFu,
    epicGamesSt,
}