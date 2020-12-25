export const initialState = {
  user: {
    name: "",
    lastName: "",
    email: "",
    telephone: "",
    id: "",
    photo: ""
  },
  authenticated: false
}

const sessionReducer = (state = initialState, action) => {
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
    case "GOOUT_SESSION":
      return {
        ...state,
        user: action.newUser,
        authenticated: action.authenticated
      }
    default:
      return state
  }
}

export default sessionReducer