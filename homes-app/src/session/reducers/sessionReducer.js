const sessionReducer = (state, action) => {
  switch (action.type) {
    case "START_SESSION":
      return {
        ...state,
        user: action.session,
        authenticated: action.authenticated
      }
    case "CHENGE_SESSION":
      return {
        ...state,
        user: action.newUser,
        authenticated: action.authenticated
      }
  }
}