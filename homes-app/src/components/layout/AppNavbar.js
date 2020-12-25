import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar"
import BarSession from './bar/BarSession'
import { withStyles } from "@material-ui/styles"
import { compose } from "recompose"
import { consumerFirebase } from "../../server"

class AppNavbar extends Component {
  state = {
    firebase: null
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newObjects = {}
    if (nextProps.firebase !== prevState.firebase) {
      newObjects.firebase = nextProps.firebase
    }
    return newObjects
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <BarSession/>
        </AppBar>
      </div>
    )
  }
}

export default compose(withStyles(styles))(AppNavbar)