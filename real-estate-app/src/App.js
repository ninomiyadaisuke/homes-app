import { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import './App.css';
import ListaInmuebles from "./components/vistas/ListaInmuebles"
import AppNavbar from "./components/layout/AppNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import theme from "./theme/theme"


class App extends Component{
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />
          
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
            </Switch>
          </Grid>
          
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;