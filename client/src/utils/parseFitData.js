import FitParser from "fit-file-parser";
import * as toArrayBuffer from "to-array-buffer";

// TODO: Add support for different units.
var fitParser = new FitParser({
  force: true,
  speedUnit: "mph",
  lengthUnit: "mi",
  temperatureUnit: "fahrenheit",
  elapsedRecordField: true,
  mode: "cascade",
});

export function parseFitData(base64) {
  try {
    var parsedData;
    const buffer = toArrayBuffer(base64);

    // Fitparser uses these stupid callbacks instead of promises.
    fitParser.parse(buffer, (error, data) => {
      if (error) {
        throw error;
      }

      parsedData = data;
    });

    return parsedData;
  } catch (error) {
    console.log(error);
  }
}

export function extractMetadataFromFitFile(parsedFitFile) {
  const activity = parsedFitFile.activity;
  if (activity.num_sessions !== 1) {
    throw new Error("Can only handle one session per activity.");
  }

  const session = activity.sessions[0];

  return {
    startTimeUtc: session.start_time.valueOf(), // Unix time (ms)
    totalMiles: session.total_distance,
    movingTimeSeconds: session.total_timer_time,
    totalTimeSeconds: activity.total_timer_time,
    avgSpeedMph: session.avg_speed,
    maxSpeedMph: session.max_speed,
    elevationGainFeet: session.total_ascent * 5280,

    // Biometrics
    // TODO: Add data types for time series data of heart rate and power
    avgCadence: session.avg_cadence,
    maxCadence: session.max_cadence,
    avgHeartRate: session.avg_heart_rate,
    maxHeartRate: session.max_heart_rate,
    avgPower: session.avg_power,
    maxPower: session.max_power,
    normalizedPower: session.normalized_power,
    tss: session.training_stress_score,
    // TODO: Use user profile to calculate based on FTP
    // intensityFactor: session.intensity_factor,
    kiloJoules: session.total_work / 1000,
  };
}
