import mongoose from "mongoose";

// Data model for the storage component.  Defines schema for use by controllers
// and other parts of backend.

const metadataSchema = mongoose.Schema({
  startTimeUtc: Number,
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
  // TODO: Use user profile to calculate based on FTP
  // intensityFactor: session.intensity_factor,
  kiloJoules: Number,
});

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
