import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createRide, updateRide } from "../../actions/rides";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [rideData, setRideData] = useState({
    creator: "",
    title: "",
    description: "",
    totalMiles: "",
    movingTimeSeconds: "",
    totalTimeSeconds: "",
    maxSpeed: "",
    avgCadence: "",
    maxCadence: "",
    avgHeartRate: "",
    maxHeartRate: "",
    avgPower: "",
    maxPower: "",
    normalizedPower: "",
    tss: "",
    intensityFactor: "",
    kiloJoules: "",
    kiloCalories: "",
  });
  const ride = useSelector((state) =>
    currentId ? state.rides.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ride) setRideData(ride);
  }, [ride]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateRide(currentId, rideData));
    } else {
      dispatch(createRide(rideData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setRideData({
      creator: "",
      title: "",
      description: "",
      totalMiles: "",
      movingTimeSeconds: "",
      totalTimeSeconds: "",
      maxSpeed: "",
      avgCadence: "",
      maxCadence: "",
      avgHeartRate: "",
      maxHeartRate: "",
      avgPower: "",
      maxPower: "",
      normalizedPower: "",
      tss: "",
      intensityFactor: "",
      kiloJoules: "",
      kiloCalories: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={rideData.creator}
          onChange={(e) =>
            setRideData({ ...rideData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={rideData.title}
          onChange={(e) => setRideData({ ...rideData, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Message"
          fullWidth
          value={rideData.description}
          onChange={(e) =>
            setRideData({ ...rideData, description: e.target.value })
          }
        />
        <TextField
          name="totalMiles"
          variant="outlined"
          label="Total Miles"
          fullWidth
          value={rideData.totalMiles}
          onChange={(e) =>
            setRideData({ ...rideData, totalMiles: e.target.value })
          }
        />
        <TextField
          name="movingTimeSeconds"
          variant="outlined"
          label="Moving Time (s)"
          fullWidth
          value={rideData.movingTimeSeconds}
          onChange={(e) =>
            setRideData({ ...rideData, movingTimeSeconds: e.target.value })
          }
        />
        <TextField
          name="maxSpeed"
          variant="outlined"
          label="Max Speed (mph)"
          fullWidth
          value={rideData.maxSpeed}
          onChange={(e) =>
            setRideData({ ...rideData, maxSpeed: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
