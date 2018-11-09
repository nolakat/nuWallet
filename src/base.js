import Rebase from "re-base";
import firebase from "firebase";



const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyD68Hd_0vnKF9c7vNga-oxWBQvSV2g9b4A",
        authDomain: "nuwallet-6635b.firebaseapp.com",
        databaseURL: "https://nuwallet-6635b.firebaseio.com",
        projectId: "nuwallet-6635b",
        storageBucket: "nuwallet-6635b.appspot.com",
        messagingSenderId: "68302151222"


});


const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
