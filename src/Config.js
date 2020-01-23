import firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = firebase.initializeApp({
    apiKey: "AIzaSyDDJtNHHgb06103BCXZWjataiw1hbnzIv4",
    authDomain: "projeto-react-653ae.firebaseapp.com",
    databaseURL: "https://projeto-react-653ae.firebaseio.com",
    projectId: "projeto-react-653ae",
    storageBucket: "projeto-react-653ae.appspot.com",
    messagingSenderId: "1005818140166",
    appId: "1:1005818140166:web:bcbea6ae70bed48619d587",
    measurementId: "G-08FCXRBQ75"
  });
  const db = firebase.database(firebaseInfo)
  const config = Rebase.createClass(db)

  export const providers = {
      'facebook': new firebase.auth.FacebookAuthProvider,
      'google': new firebase.auth.GoogleAuthProvider
  }
export const auth = firebaseInfo.auth()

export default config