import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
        // Initialize Firebase
            apiKey: "AIzaSyAFXUTQHdMyDcZotAvT1BQE8RkW19oEOdU",
            authDomain: "nuwallet-55e96.firebaseapp.com",
            databaseURL: "https://nuwallet-55e96.firebaseio.com",

});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;