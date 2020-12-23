import { Avatar, Container, TextField, Typography,Grid } from '@material-ui/core'
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
  }
}

class UserRegistration extends Component {
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
                <TextField name="name" fullWidth label="名前を入力してください" />
              </Grid>
            </Grid>
          </from>
        </div>
        </Container>
    )
  }
}

export default UserRegistration
