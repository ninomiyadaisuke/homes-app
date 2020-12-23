import { Avatar, Container, TextField, Typography,Grid, Button } from '@material-ui/core'
import React, { Component } from 'react'
import LockOutLineIcon from "@material-ui/icons/LockOutlined"

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
  },
  form: {
    width: "100%",
    marginTop: 10
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }
}

class UserRegistration extends Component {
  state = {
    user: {
      name: "",
      lastName: "",
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

  userRegistration = e => {
    e.preventDefault()
    console.log("hai",this.state.user);
  }

  render() {
    return (
        <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            アカウント登録をする
          </Typography>
          <from style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField name="name" onChange={this.onChange} value={this.state.user.name} fullWidth label="苗字" />
              </Grid>
              <Grid item md={6} xs={12} >
                <TextField name="lastName" onChange={this.onChange} value={this.state.user.lastName} fullWidth label="名前"/>
              </Grid>
              <Grid item md={6} xs={12} >
                <TextField name="email" onChange={this.onChange} value={this.state.user.email} fullWidth label="email"/>
              </Grid> 
              <Grid item md={6} xs={12} >
                <TextField type="password" name="password" onChange={this.onChange} value={this.state.user.password} fullWidth label="password"/>
              </Grid>                 
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button type="submit" onClick={this.userRegistration} variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                  登録
                </Button>
              </Grid>
            </Grid>
          </from>
        </div>
        </Container>
    )
  }
}

export default UserRegistration
