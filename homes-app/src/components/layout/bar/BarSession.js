import React, { Component } from 'react'
import {Button,Drawer,IconButton, Toolbar, Typography} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { consumerFirebase } from "../../../server"
import { compose } from "recompose"
import { StateContext } from "../../../session/store"
import { goOutSession } from "../../../session/actions/sessionAction"
import { MenuRight } from "./MenuRight"
import photoUserTemp from "../../../logo.svg"





const styles = theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grow: {
    flexGrow: 1
  }
})

class BarSession extends Component {
  static contextType = StateContext

  state = {
    firebase: null
  }

  goOutSession = () => {
    const { firebase } = this.state
    const [{session}, dispatch] = this.context
  }

  

  static getDerivedStateFromProps(nextProps, prevState) {
    let newObjects = {}
    if (nextProps.firebase !== prevState.firebase) {
      newObjects.firebase = nextProps.firebase
    }
    return newObjects
  }


  render() {
    const { classes } = this.props
    const [{ session }, dispatch] = this.context
    const { user } = session
    let textUser = user.name + " " + user.lastName
    
    return (
      <div>
        <Drawer
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          anchor="right"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <MenuRight classes={classes} user={user} textuser={textUser} photo={photoUserTemp} goOutSession={this.goOutSession}/>
          </div>
        </Drawer>
        <Toolbar>
          <IconButton color="inherit">
            <i className="material-icons">menu</i>
          </IconButton>
          <Typography variant="h6">
            OSAMU HOMES
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.sectionDesktop}>
            <Button color="inherit">Login</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit">
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    )
  }
}

export default compose(withStyles(styles),consumerFirebase)(BarSession)
