import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createRide, updateRide } from "../../actions/rides";
import {
  extractMetadataFromFitFile,
  parseFitData,
} from "../../utils/parseFitData";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [rideData, setRideData] = useState({
    title: "",
    description: "",
    creator: "",
    fitFile: null,
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
      title: "",
      description: "",
      creator: "",
      fitFile: null,
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
          {currentId ? "Editing" : "Creating"} a ride
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
          label="Description"
          fullWidth
          value={rideData.description}
          onChange={(e) =>
            setRideData({ ...rideData, description: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <input
            type="file"
            multiple={false}
            onChange={(file) => {
              console.log(file);
            }} // TODO
          />
        </div>
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
