import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core'
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
  },
  form: {
    width: "100%",
    marginTop: 8
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
          <from style={style.form}>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              fullWidth
              margin="normal"
            /> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              送信
            </Button>
          </from>
        </div>
      </Container>
    )
  }
}

export default Login
