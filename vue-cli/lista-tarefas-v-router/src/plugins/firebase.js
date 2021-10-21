import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCb9g-voYyBoVBBDnnZcz0Qo-WzdZUNMco",
    authDomain: "todolist-a2fd1.firebaseapp.com",
    databaseURL: "https://todolist-a2fd1.firebaseio.com",
    projectId: "todolist-a2fd1",
    storageBucket: "todolist-a2fd1.appspot.com",
    messagingSenderId: "349727216135",
    appId: "1:349727216135:web:10d11540d0b06dcc0f10a2"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

// export utils/refs
export {
    db,
    auth,
    profileCollection,
    tasksCollection,
}