import axios from "axios";

const url = "http://localhost:5000/rides";

export const getRides = () => axios.get(url);
export const createRide = (newRideData) => axios.post(url, newRideData);
export const updateRide = (id, updatedRideData) =>
  axios.patch(`${url}/${id}`, updatedRideData);
export const deleteRide = (id) => axios.delete(`${url}/${id}`);
