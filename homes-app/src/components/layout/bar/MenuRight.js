import React from "react"
import { Avatar, Link, List, ListItem, ListItemText } from "@material-ui/core"
import { CancelScheduleSendSharp } from "@material-ui/icons"


export const MenuRight = ({ classes, user, textuser, photoUser, goOutSession }) => (
  <div className={classes.list}>
    <List>
      <ListItem button component={Link} to="/auth/userregistration">
        <Avatar
          src={photoUser}
        />
        <ListItemText classes={{ primary: classes.listItemText }} primary={textuser} />
      </ListItem>
      <ListItem button onClick={goOutSession}>
        <ListItemText classes={{primary: classes.listItemText}} primary="Log out"/>
      </ListItem>
    </List>
  </div>
)