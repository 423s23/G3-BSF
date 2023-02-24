import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/root"
import SeriesDetailScreen from "./screens/seriesdetailscreen"
import CheckInScreen from "./screens/checkinscreen"
import EditRegisteredVolunteers from "./screens/editRegisteredVolunteers";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
       {
         path: "series",
         element: <SeriesDetailScreen />,
       },
       {
         path: "checkin",
         element: <CheckInScreen />,
       },
       {
        path: "editvolunteers",
        element: <EditRegisteredVolunteers />
       }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
