import { Avatar, Container, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import LockOutLineIcon from "@material-ui/icons/LockOutlined"

const style = {
  paper: {
    marginTop: 9,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"    
  },
  avatar: {
    margin: 5,
    backgroundColor: "red"
  }
}

class Login extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            名前を入力してください
          </Typography>
        </div>
      </Container>
    )
  }
}

export default Login
