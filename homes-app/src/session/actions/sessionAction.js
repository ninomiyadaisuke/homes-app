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
            dispatch({
              type: "START_SESSION",
              session: userDB,
              authenticated: true
            })
            resolve()
          })
      }) 
      .catch(error => {
        console.log("error", error);
      })
  })
}

export const createUser = (dispatch, firebase, user) => {
  return new Promise((resolve, eject) => {
    firebase.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(auth => {
        firebase.db
          .collection("Users")
          .doc(auth.user.uid)
          .set({
            id: auth.user.uid,
            email: user.email,
            name: user.name,
            lastName: user.lastName
          }, { maege: true })
          .then(doc => {
            user.id = auth.user.uid
            dispatch({
              type: "START_SESSION",
              session: user,
              authenticated: true
            })
          })
      })
  })
}