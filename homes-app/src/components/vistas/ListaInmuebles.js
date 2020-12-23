import React, { Component } from 'react'
import Button from "@material-ui/core/Button"

export default class ListaInmuebles extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" >Color Primary</Button>
        <Button varian="contained" color="secondary" >Color Secondary</Button>
      </div>
    )
  }
}