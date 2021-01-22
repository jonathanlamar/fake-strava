import mongoose from "mongoose";

// Data model for ride metadata.  Just the relevant information from a fit file.
// The file itself is also saved in the RidePost schema.

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

export default metadataSchema;
