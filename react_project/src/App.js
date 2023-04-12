import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/root"
import SeriesDetailScreen from "./screens/seriesdetailscreen"
import CheckInScreen from "./screens/checkinscreen"
import EditRegisteredVolunteers from "./screens/editRegisteredVolunteers";
import RacesScreen from "./screens/racesscreen"
import VolunteerScreen from "./screens/volunteersscreen";
import RaceDetailScreen from "./screens/racedetailscreen"
import Help from "./screens/help"
import AdminLoginScreen from "./screens/adminLoginScreen";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "races",
          element: <RacesScreen />
        },
        {
          path: "race/:raceId",
          element: <RaceDetailScreen />,
        },
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
        },
        {
          path: "volunteers",
          element: <VolunteerScreen />
        },
        {
          path: "adminlogin",
          element: <AdminLoginScreen />
        },
        {
          path: "help",
          element: <Help />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
