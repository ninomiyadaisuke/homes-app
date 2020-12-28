import React, { Component } from 'react'
import {Button,Drawer,IconButton, Toolbar, Typography} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { consumerFirebase } from "../../../server"
import { compose } from "recompose"
import { StateContext } from "../../../session/store"
import { goOutSession } from "../../../session/actions/sessionAction"
import { MenuRight } from "./MenuRight"
import photoUserTemp from "../../../image/IMG_20200729_231352 (1).jpg"
import { withRouter } from 'react-router-dom'





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
  },
  avatarSize: {
    width: 40,
    height: 40
  },
  listItemText: {
    fontSize: "14px",
    fontWidth: 600,
    paddingLeft: "15px",
    color: "#212121"
  },
  list: {
    width: 250
  }
})

class BarSession extends Component {
  static contextType = StateContext

  state = {
    firebase: null,
    right: false

  }

  goOutSessionApp = () => {
    const { firebase } = this.state
    const [{ session }, dispatch] = this.context
    goOutSession(dispatch, firebase).then(success => {
      this.props.history.push("/auth/login")
    })
  }

  toggleDrawer = (size, open) => () => {
    this.setState(
      {
        [size]: open
      }
    )
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
            <MenuRight classes={classes}
              user={user}
              textuser={textUser}
              photoUser={photoUserTemp}
              goOutSession={this.goOutSessionApp} />
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
            <IconButton color="inherit"
              onClick={this.toggleDrawer("right", true)}
            >
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  consumerFirebase)(BarSession)
