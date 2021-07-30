const allRoutesInitialState = {
  hasError: false,
  isLoading: false,
  routes: [],
};
const directionsInitialState = {
  hasError: false,
  isLoading: false,
  directions: [],
};
const stopsInitialState = {
  hasError: false,
  isLoading: false,
  stops: [],
};
const departuresInitialState = {
  hasError: false,
  isLoading: false,
  departures: [],
};


const formatRoutes = (routes) => {
    return routes.map(route => ({
      Text: route.Description,
      Value: route.Route
    }))
  }
  
  const formatDepartures = (departures) => {
    if(departures.length > 0){ 
        return departures.map(time => (time.DepartureText)) }else{ return ['No departures found']}
    
  }
  

export function allRoutes(state = allRoutesInitialState, action) {
  switch (action.type) {
    case "ROUTES_ARE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "ROUTES_FETCH_DATA_SUCCESS":
      return {
        ...state,
        routes: formatRoutes(action.routes),
      };
    case "ROUTES_HAVE_ERROR":
      return {
        ...state,
        hasError: action.hasError,
      };
    default:
      return state;
  }
}

export function directions(state = directionsInitialState, action) {
  switch (action.type) {
    case "DIRECTIONS_ARE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "DIRECTIONS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        directions: action.directions,
      };
    case "DIRECTIONS_HAVE_ERROR":
      return {
        ...state,
        hasError: action.hasError,
      };
    default:
      return state;
  }
}

export function stops(state = stopsInitialState, action) {
  switch (action.type) {
    case "STOPS_ARE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "STOPS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        stops: action.stops,
      };
    case "STOPS_HAVE_ERROR":
      return {
        ...state,
        hasError: action.hasError,
      };
    default:
      return state;
  }
}

export function departures(state = departuresInitialState, action) {
  switch (action.type) {
    case "DEPARTURES_ARE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "DEPARTURES_FETCH_DATA_SUCCESS":
      return {
        ...state,
        departures: formatDepartures(action.departures),
      };
    case "DEPARTURES_HAVE_ERROR":
      return {
        ...state,
        hasError: action.hasError,
      };
    default:
      return state;
  }
}
