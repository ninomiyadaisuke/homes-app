import { Avatar, Container } from '@material-ui/core'
import React, { Component } from 'react'
import { Container } from "@material-ui/core"
import LockOutLineIcon from "@material-ui/icons/LockOutLined"

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 8,
    backgroundColor: "#53935"
  }
}

class UserRegistration extends Component {
  render() {
    return (
        <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>

          </Avatar>
        </div>
        </Container>
    )
  }
}

export default UserRegistration
