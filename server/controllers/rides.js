import RidePost from "../models/ridePost.js";
import mongoose from "mongoose";

// Define logic for CRUD operations.  Used in routes to define API.

export const getRides = async (req, res) => {
  try {
    const ridePosts = await RidePost.find();

    res.status(200).json(ridePosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRide = async (req, res) => {
  const ridePost = req.body;
  const newRide = new RidePost(ridePost);

  try {
    await newRide.save();

    res.status(201).json(newRide);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const updateRide = async (req, res) => {
  const { id: _id } = req.params;
  const ridePost = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No ride with that ID");
  }

  const updatedRide = await RidePost.findByIdAndUpdate(
    _id,
    { ...ridePost, _id }, // This syntax confuses me.
    {
      new: true,
    }
  );

  res.json(updatedRide);
};

export const deleteRide = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No ride with that ID");
  }

  await RidePost.findByIdAndRemove(_id);

  res.json({ message: "Ride deleted successfully." });
};
