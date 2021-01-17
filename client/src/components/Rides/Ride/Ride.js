import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deleteRide } from "../../../actions/rides";

const Ride = ({ rideData, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={rideData.selectedFile}
        title={rideData.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{rideData.creator}</Typography>
        <Typography variant="h6">
          {moment(rideData.startTime).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(rideData._id);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {rideData.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {rideData.description}
        </Typography>
      </CardContent>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          Distance: {rideData.totalMiles} Moving time:{" "}
          {rideData.movingTimeSeconds}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteRide(rideData._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Ride;
