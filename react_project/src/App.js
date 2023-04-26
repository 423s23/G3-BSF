import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/root"
import SeriesDetailScreen from "./screens/seriesdetailscreen"
import CheckInScreen, {loader as CheckinLoader} from "./screens/checkinscreen"
import EditRegisteredVolunteers from "./screens/editRegisteredVolunteers";
import RacesScreen from "./screens/racesscreen"
import VolunteerScreen from "./screens/volunteersscreen";
import RaceDetailScreen, { loader as RaceIdLoader } from "./screens/racedetailscreen"
import Help from "./screens/help"
import AdminLoginScreen from "./screens/adminLoginScreen";
import CreateAdminScreen from "./screens/createAdminScreen";



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
          loader: RaceIdLoader,
        },
        {
          path: "series",
          element: <SeriesDetailScreen />,
        },
        {
          path: "checkin/:raceId/:date",
          element: <CheckInScreen />,
          loader: CheckinLoader,
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
          path: "createadmin",
          element: <CreateAdminScreen />
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
