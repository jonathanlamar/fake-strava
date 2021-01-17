import axios from "axios";

const url = "http://localhost:5000/rides";

export const getRides = () => axios.get(url);
export const createRide = (newRide) => axios.post(url, newRide);
export const updateRide = (id, updatedRide) =>
  axios.patch(`${url}/${id}`, updatedRide);
export const deleteRide = (id) => axios.delete(`${url}/${id}`);
