import { Component, useContext, useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid"
import './App.css';
import ListaInmuebles from "./components/vistas/ListaInmuebles"
import AppNavbar from "./components/layout/AppNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from "./theme/theme"
import UserRegistration from "./components/security/UserRegistration"
import Login from './components/security/Login';
import { FirebaseContext } from "./server"
import { useStateValue } from "./session/store"
import { Snackbar } from '@material-ui/core';
import openSnackbarReducer from './session/reducers/openSnackbarReducer';


const App = (props) => {
  let firebase = useContext(FirebaseContext)
  const [authenticationStarted, setupFirebaseInitial] = useState(false)

  const [{ openSnackbar }, dispatch] = useStateValue()
  //reducers/index.js

  useEffect(() => {
    firebase.isStarted().then(val => {
      setupFirebaseInitial(val)
    })
  })

  return authenticationStarted !== false ? (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar ? openSnackbarReducer.open : false}
        autoHideDuration={3000}
        ContentProps={{
          "aria-describedby" : "message-id" 
        }}
        message={
          <sapan id="message-id">
            {openSnackbar ? openSnackbar.message : ""}
          </sapan>
        }
        onClose={() => 
          dispatch({
            type: "OPEN_SNACKBAR",
            openMessage: {
              open: false,
              message: ""
            }
          })
        }
      >
      </Snackbar>
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />
          
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route path="/auth/userregistration" exact component={UserRegistration}></Route>
              <Route path="/auth/login" exact component={Login}></Route>
            </Switch>
          </Grid>
          
        </MuiThemeProvider>
      </Router>    
    </>

  )
    :null
}

export default App;