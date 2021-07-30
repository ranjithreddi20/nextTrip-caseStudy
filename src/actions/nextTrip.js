import axios from "axios";
import {
  NEXT_TRIP_ROUTES_URL,
  NEXT_TRIP_DIRECTIONS_BASE_URL,
  NEXT_TRIP_STOPS_BASE_URL,
  NEXT_TRIP_BASE_URL,
} from "../constants/apiConstants";

export function getAllRoutes() {
  return (dispatch) => {
    dispatch(getAllRoutesLoading(true));
    axios
      .get(NEXT_TRIP_ROUTES_URL)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(getAllRoutesLoading(false));
        return response;
      })
      .then((response) => dispatch(routesFetchDataSuccess(response.data)))
      .catch(() => dispatch(routesHaveError(true)));
  };
}

export function getAllRoutesLoading(bool) {
  return {
    type: "ROUTES_ARE_LOADING",
    isLoading: bool,
  };
}

export function routesFetchDataSuccess(routes) {
  return {
    type: "ROUTES_FETCH_DATA_SUCCESS",
    routes,
  };
}

export function routesHaveError(bool) {
  return {
    type: "ROUTES_HAVE_ERROR",
    hasError: bool,
  };
}

export function getDirections(route) {
  return (dispatch) => {
    dispatch(getDirectionsLoading(true));
    axios
      .get(`${NEXT_TRIP_DIRECTIONS_BASE_URL}/${route}`)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(getDirectionsLoading(false));
        return response;
      })
      .then((response) => dispatch(directionsFetchDataSuccess(response.data)))
      .catch(() => dispatch(directionsHaveError(true)));
  };
}

export function getDirectionsLoading(bool) {
  return {
    type: "DIRECTIONS_ARE_LOADING",
    isLoading: bool,
  };
}

export function directionsFetchDataSuccess(directions) {
  return {
    type: "DIRECTIONS_FETCH_DATA_SUCCESS",
    directions,
  };
}

export function directionsHaveError(bool) {
  return {
    type: "DIRECTIONS_HAVE_ERROR",
    hasError: bool,
  };
}

export function getStops(route, direction) {
  return (dispatch) => {
    dispatch(getStopsLoading(true));
    axios
      .get(`${NEXT_TRIP_STOPS_BASE_URL}/${route}/${direction}`)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(getStopsLoading(false));
        return response;
      })
      .then((response) => dispatch(stopsFetchDataSuccess(response.data)))
      .catch(() => dispatch(stopsHaveError(true)));
  };
}

export function getStopsLoading(bool) {
  return {
    type: "STOPS_ARE_LOADING",
    isLoading: bool,
  };
}

export function stopsFetchDataSuccess(stops) {
  return {
    type: "STOPS_FETCH_DATA_SUCCESS",
    stops,
  };
}

export function stopsHaveError(bool) {
  return {
    type: "STOPS_HAVE_ERROR",
    hasError: bool,
  };
}

export function getDepartures(route, direction, stop) {
  return (dispatch) => {
    dispatch(getDeparturesLoading(true));
    axios
      .get(`${NEXT_TRIP_BASE_URL}/${route}/${direction}/${stop}`)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(getDeparturesLoading(false));
        return response;
      })
      .then((response) => dispatch(departuresFetchDataSuccess(response.data)))
      .catch(() => dispatch(departuresHaveError(true)));
  };
}

export function getDeparturesLoading(bool) {
  return {
    type: "DEPARTURES_ARE_LOADING",
    isLoading: bool,
  };
}

export function departuresFetchDataSuccess(departures) {
  return {
    type: "DEPARTURES_FETCH_DATA_SUCCESS",
    departures,
  };
}

export function departuresHaveError(bool) {
  return {
    type: "DEPARTURES_HAVE_ERROR",
    hasError: bool,
  };
}
