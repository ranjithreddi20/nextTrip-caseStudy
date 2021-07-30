import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Dropdown from "../components/Dropdown";
import ItemList from "../components/ItemList";
import {
  getAllRoutes,
  getDirections,
  getStops,
  getDepartures,
} from "../actions/nextTrip";

const NextTrip = ({ routes, directions, stops, departures }) => {
  const [route, setRoute] = useState("");
  const [direction, setDirection] = useState("");
  const [stop, setStop] = useState("");

  const dispatch = useDispatch();

  const loadRoutes = () => {
    dispatch(getAllRoutes());
  };
  const loadDirections = (route) => {
    dispatch(getDirections(route));
  };
  const loadStops = (route, direction) => {
    dispatch(getStops(route, direction));
  };
  const loadDepartures = (route, direction, stop) => {
    dispatch(getDepartures(route, direction, stop));
  };

  const updateRoute = (val) => {
    setRoute(val);
    setDirection("");
    setStop("");
    loadDirections(val);
  };
  const updateDirection = (val) => {
    setDirection(val);
    setStop("");
    loadStops(route, val);
  };
  const updateStops = (val) => {
    setStop(val);
    loadDepartures(route, direction, val);
  };

  useEffect(() => {
    loadRoutes();
  }, []);

  return (
    <div className="nexttrip">
      <Dropdown
        type={"Route"}
        options={routes}
        selected={route}
        update={updateRoute}
      />
      {route && (
        <Dropdown
          type={"Direction"}
          options={directions}
          selected={direction}
          update={updateDirection}
        />
      )}
      {route && direction && (
        <Dropdown
          type={"Stop"}
          options={stops}
          selected={stop}
          update={updateStops}
        />
      )}
      <ItemList list={departures} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return({
  routes: state.allRoutes.routes,
  directions: state.directions.directions,
  stops: state.stops.stops,
  departures: state.departures.departures
})
};

export default connect(mapStateToProps)(NextTrip);
