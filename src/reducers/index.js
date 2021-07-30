import { combineReducers } from "redux";
import { allRoutes, directions, stops, departures } from "./nextTrip";

export default combineReducers({
  allRoutes,
  directions,
  stops,
  departures,
});
