import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDuLuEC2rhSKabzK67LBlXZrAg9yE94gQ",
    authDomain: "todo-list-vue-cb5f9.firebaseapp.com",
    projectId: "todo-list-vue-cb5f9",
    storageBucket: "todo-list-vue-cb5f9.appspot.com",
    messagingSenderId: "144802390991",
    appId: "1:144802390991:web:b3a516f418ad06f50e28ba"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection, googleProvider
}