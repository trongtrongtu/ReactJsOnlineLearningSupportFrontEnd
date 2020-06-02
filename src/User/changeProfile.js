import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 20,
    width: 250,
    height: 250,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" alignItems="center">

        <Avatar alt="Remy Sharp" src="image/hh.jpg" className={classes.bigAvatar} />
      </Grid>
      <p style={{ textAlign: "center", fontSize: "27px", fontFamily: "Pacifico" }}>Muốn thành công phải chấp nhận trải qua đắng cay ngọt bùi<br /> chỉ có làm thì mới có ăn...</p>
      <p style={{ position: "absolute", right: "290px", fontSize: "18px" }}>Huan Rose</p>
    </div>

  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);