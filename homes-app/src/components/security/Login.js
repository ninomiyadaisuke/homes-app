import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import LockOutLineIcon from "@material-ui/icons/LockOutlined"
import { consumerFirebase } from '../../server'
import { compose } from "recompose"

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
  state = {
    firebase: null,
    user: {
      email: "",
      password: ""
    }
  }

  onChange = e => {
    let user = Object.assign({}, this.state.user)
    user[e.target.name] = e.target.value
    this.setState({
      user: user
    })
  }

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
              onChange={this.onChange}
              value={this.state.user.email}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              fullWidth
              margin="normal"
              onChange={this.onChange}
              value={this.state.user.password}
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

export default compose(consumerFirebase)(Login)
