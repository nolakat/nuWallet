import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
        // Initialize Firebase
            apiKey: MYAPIKEY,
            authDomain: MYAUTHODOMAIN,
            databaseURL: MYDATABASEURL,

});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
