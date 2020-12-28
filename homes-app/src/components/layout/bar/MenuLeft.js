import React from "react"
import { Divider, Link, List, ListItem, ListItemText } from "@material-ui/core";


export const MenuLeft = ({ classes }) => (
  <div className={classes.list}>
    <List >
      <ListItem component={Link} button to="">
        <i className="material-icons">account_box</i>
        <ListItemText classes={{primary: classes.ListItemText}} primary="Profile"/>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem component={Link} button to="">
        <i className="material-icons">add_box</i>
        <ListItemText classes={{primary: classes.ListItemText}} primary="New Property"/>
      </ListItem>
      <ListItem component={Link} button to="">
        <i className="material-icons">business</i>
        <ListItemText classes={{primary: classes.ListItemText}} primary="Estate"/>
      </ListItem>   
      <ListItem component={Link} button to="">
        <i className="material-icons">mail_outline</i>
        <ListItemText classes={{primary: classes.ListItemText}} primary="Message"/>
      </ListItem>         
    </List>
  </div>
)