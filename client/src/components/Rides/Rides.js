import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";
import Ride from "./Ride/Ride";

const Rides = ({ setCurrentId }) => {
  const rides = useSelector((state) => state.rides);
  const classes = useStyles();

  return !rides.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {rides.map((rideData) => (
        <Grid key={rideData._id} item xs={12} sm={6}>
          <Ride rideData={rideData} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Rides;
