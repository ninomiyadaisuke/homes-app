export const startSession = (dispatch, firebase, email, password) => {
  return new Promise((resolve, eject) => {
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        firebase.db
          .collection("Users")
          .doc(auth.user.uid)
          .get()
          .then(doc => {
            const userDB = doc.data()
            
          })
      }) 
  })
}