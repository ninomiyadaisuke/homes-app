import app from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyB0m8dbvVeoauF94Z1eqJWOXklECG0Kl80",
  authDomain: "home-7400a.firebaseapp.com",
  projectId: "home-7400a",
  storageBucket: "home-7400a.appspot.com",
  messagingSenderId: "883517423838",
  appId: "1:883517423838:web:aa82ba8bc2b2e4d986424f",
  measurementId: "G-VVEWME7C5F"
};

class Firebase{
  constructor() {
    app.initializeApp(config)
    this.db = app.firestore()
  }

}

export default Firebase