// TODO: Implement protobuf-style messages here instead of unvalidated classes.
export class RideData {
  constructor() {
    this._id = null;
    this.title = "";
    this.description = "";
    this.creator = "";
    this.fitFile = null;
    this.metadata = {
      startTimeUtc: null,
      totalMiles: 0,
      movingTimeSeconds: 0,
      totalTimeSeconds: 0,
      avgSpeedMph: 0,
      maxSpeedMph: 0,
      elevationGainFeet: 0,

      // Biometrics
      // TODO: Add data types for time series data of heart rate and power
      avgCadence: 0,
      maxCadence: 0,
      avgHeartRate: 0,
      maxHeartRate: 0,
      avgPower: 0,
      maxPower: 0,
      normalizedPower: 0,
      tss: 0,
      // TODO: Use user profile to calculate based on FTP
      // intensityFactor: session.intensity_factor,
      kiloJoules: 0,
    };
  }

  static create(id, title, description, creator, fitFile, metadata) {
    var rideData = new RideData();

    rideData._id = id;
    rideData.title = title;
    rideData.description = description;
    rideData.creator = creator;
    rideData.fitFile = fitFile;
    rideData.metadata = metadata;

    return rideData;
  }
}
