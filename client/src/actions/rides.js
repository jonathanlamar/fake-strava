import * as api from "../api";

// Action Creators.  This is for redux, which updates a shared global state
// through "actions" and "reducers" via a "dispatcher." You dispatch actions
// using the dispatcher, and the reducer handles state updates.  Actions should
// be simple js objects with a type parameter and relevant data for updating
// state (e.g., new ride object).  These are actually action factories - they
// call the API and dispatch an action with the result.

// Somehow this curried function comes from redux-thunk
export const getRides = () => async (dispatch) => {
  try {
    const { data } = await api.getRides();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRide = (ride) => async (dispatch) => {
  try {
    const { data } = await api.createRide(ride);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRide = (id, ride) => async (dispatch) => {
  try {
    const { data } = await api.updateRide(id, ride);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRide = (id) => async (dispatch) => {
  try {
    await api.deleteRide(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
