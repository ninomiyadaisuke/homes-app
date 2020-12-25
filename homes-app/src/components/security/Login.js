import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import LockOutLineIcon from "@material-ui/icons/LockOutlined"
import { consumerFirebase } from '../../server'
import { compose } from "recompose"
import { startSession } from "../../session/actions/sessionAction"
import { StateContext } from '../../session/store'
import { openMessageScreen } from "../../session/actions/snackbarAction"

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
  static contextType = StateContext
  //store

  state = {
    firebase: null,
    user: {
      email: "",
      password: ""
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.firebase === prevState.firebase) {
      return null
    }

    return {
      firebase: nextProps.firebase
    }
  }

  onChange = e => {
    let user = Object.assign({}, this.state.user)
    user[e.target.name] = e.target.value
    this.setState({
      user: user
    })
  }

  login = async e => {
    e.preventDefault()
    const [{session}, dispatch] = this.context
    const { firebase, user } = this.state
    const { email, password } = user
                         //sessionAction
    let callback = await startSession(dispatch, firebase, email, password)
    if (callback.status) {
      this.props.history.push("/")
    } else {
      //snackbarAction
      openMessageScreen(dispatch, {
        open: true,
        message: callback.message.message
        //sessionAction catch message :error
      })
    }
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
              onClick={this.login}
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
