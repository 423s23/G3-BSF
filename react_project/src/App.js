import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/root"
import RaceDetailScreen from "./screens/racedetailscreen"
import CheckInScreen from "./screens/checkinscreen"
import EditRegisteredVolunteers from "./screens/editRegisteredVolunteers";
import RacesScreen from "./screens/racesscreen"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
       {
        path: "races",
        element: <RacesScreen />,
       },
       {
         path: "race/:raceId",
         element: <RaceDetailScreen />,
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
