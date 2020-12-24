import sessionReducer from "./sessionReducer"
import openSnackbarReducer from "./openSnackbarReducer"

export const mainReducer = ({ session, openSnacbar }, action) => {
  return {
    session: sessionReducer(session, action),
    openSnacbar: openSnackbarReducer(openSnacbar, action)
    //App.js
  }
}