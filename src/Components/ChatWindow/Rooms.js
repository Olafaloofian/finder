import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { promises } from 'fs';
import Room from './Room';

const styles = theme => ({
  root: {
    overflow:'scroll',
    width: '100%',
    maxWidth: '100vw',
    height: '80vh',
    backgroundColor: theme.palette.background.paper,
  },
});
class Rooms extends Component {
    constructor(props){
      super(props);

      this.state={
        sender: {}
      }
    }
   
    render() {
      console.log("currentUser", this.props.user.id);
      const rooms =this.props.rooms.map(room => {
        const otherUserIndex = room.userIds.findIndex( e => e !== this.props.user.id )
        const id = room.userIds[otherUserIndex]
        console.log("otherUSerId", id);
        return (
        <div key={room.id} onClick={()=>this.props.handleChangeIndex(1)} >
        <div onClick={() => this.props.subscribeToRoom(room.id)}>
        <Room id={room.id} otherUserId={id} />
        </div>
        </div>
        )
      })


        
      
    const { classes } = this.props;
        return (
             <div className={classes.root}>
             <List>
                 {rooms}
            </List>
    </div>
  );
 }
}

Rooms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rooms);







