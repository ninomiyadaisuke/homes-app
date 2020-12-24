import { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import './App.css';
import ListaInmuebles from "./components/vistas/ListaInmuebles"
import AppNavbar from "./components/layout/AppNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from "./theme/theme"
import UserRegistration from "./components/security/UserRegistration"
import Login from './components/security/Login';

const App = (props) => {
  return (
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
  )
}

export default App;