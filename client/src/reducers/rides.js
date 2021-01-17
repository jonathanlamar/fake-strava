// This is the "reducer" for redux.  Redux handles a single shared global state
// through "actions" and "reducers" via a "dispatcher."  You dispatch actions
// using the dispatcher, and the reducer handles state updates.  Thus, the
// reducer should have signature (currentState, action) => newState.  The logic
// here is simple, since the action contains the API result for updating the
// state.

export default (rides = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...rides, action.payload];
    case "UPDATE":
      return rides.map((ride) =>
        ride._id === action.payload._id ? action.payload : ride
      );
    case "DELETE":
      return rides.filter((ride) => ride._id !== action.payload);
    default:
      return rides;
  }
};
