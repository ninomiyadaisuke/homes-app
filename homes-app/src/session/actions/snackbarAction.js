export const openMessageScreen = (dispatch, openMessage) => {
  dispatch({
    type: "OPEN_SNACKBAR",
    openMessage: openMessage
  })
}