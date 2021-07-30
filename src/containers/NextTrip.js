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
import { useHistory } from "react-router-dom";

const NextTrip = ({ routes, directions, stops, departures, location }) => {
  
  const history = useHistory();

  const params = history.location.pathname.split("/nexttrip/")[1];
  const [route, setRoute] = useState(params?.split("/")[0]);
  const [direction, setDirection] = useState(params?.split("/")[1]);
  const [stop, setStop] = useState(params?.split("/")[2]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (params) {
      loadDirections(params.split("/")[0]);
      loadStops(params.split("/")[0], params.split("/")[1]);
      loadDepartures(
        params.split("/")[0],
        params.split("/")[1],
        params.split("/")[2]
      );
    }
  }, [params]);

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
    history.push("/nexttrip/" + route + "/" + direction + "/" + val);
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
  return {
    routes: state.allRoutes.routes,
    directions: state.directions.directions,
    stops: state.stops.stops,
    departures: state.departures.departures,
  };
};

export default connect(mapStateToProps)(NextTrip);
