export const tripViewConfig = {
Details: [
    {
      key: "TripId",
      value: "TripId",
      type: "text",
      editable: false,
      required: true
    },
  ],
Type: [
    {
      key: "TripRoute",
      value: "Route Name",
      type: "lookup",
      editable: true,
      required: true
    },
  ],
}
export const routeViewConfig = {
Details: [
    {
      key: "From",
      value: "From",
      type: "text",
      editable: false,
      required: true
    },
    {
      key: "RouteName",
      value: "RouteName",
      type: "text",
      editable: false,
      required: true
    },
    {
      key: "RouteId",
      value: "RouteId",
      type: "text",
      editable: false,
      required: true
    },
    {
      key: "To",
      value: "To",
      type: "text",
      editable: false,
      required: true
    },
  ],
Type: [
  ],
}
