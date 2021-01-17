import mongoose from "mongoose";

// Data model for the storage component.  Defines schema for use by controllers
// and other parts of backend.

const rideSchema = mongoose.Schema({
  // Basic metadata
  title: String,
  description: String,
  creator: String,

  // Basic info.
  // TODO: Add support for gpx.
  startTime: Date,
  totalMiles: Number,
  movingTimeSeconds: Number,
  totalTimeSeconds: Number,
  maxSpeed: Number,

  // Biometrics
  // TODO: Add data types for time series data of heart rate and power
  avgCadence: Number,
  maxCadence: Number,
  avgHeartRate: Number,
  maxHeartRate: Number,
  avgPower: Number,
  maxPower: Number,
  normalizedPower: Number,
  tss: Number,
  intensityFactor: Number,
  kiloJoules: Number,
  kiloCalories: Number,
});

const RidePost = mongoose.model("RidePost", rideSchema);

export default RidePost;
