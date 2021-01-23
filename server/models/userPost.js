import mongoose from "mongoose";

// Data model for user biometrics.  Updated whenever new FTP or weight, etc. is
// recorded.

const userSchema = mongoose.schema({
  name: String,
  dateOfBirth: Date,

  // Biometrics
  // TODO: Add option for units.
  weightPounds: Number,
  ftp: Number,
});
