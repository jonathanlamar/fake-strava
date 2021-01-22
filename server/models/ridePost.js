import mongoose from "mongoose";
import metadataSchema from "./rideMetadata.js";

// Data model for rides.  Defines schema for use by controllers and other parts
// of backend.

const rideSchema = mongoose.Schema({
  // Basic metadata
  title: String,
  description: String,
  creator: String,

  // Raw data
  fitFile: String,

  metadata: metadataSchema,

  // Basic info.
  // TODO: Add configurable units.
  startTimeUtc: Date,
  totalMiles: Number,
  movingTimeSeconds: Number,
  totalTimeSeconds: Number,
  avgSpeedMph: Number,
  maxSpeedMph: Number,
  elevationGainFeet: Number,

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
  // TODO: Need to reference user profile to get FTP.
  // intensityFactor: Number,
  kiloJoules: Number,
});

const RidePost = mongoose.model("RidePost", rideSchema);

export default RidePost;
