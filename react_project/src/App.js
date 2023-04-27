import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/root"
import SeriesDetailScreen from "./screens/seriesdetailscreen"
import CheckInScreen from "./screens/checkinscreen"
import RacesScreen from "./screens/racesscreen"
import RaceDetailScreen, { loader as RaceIdLoader } from "./screens/racedetailscreen"
import Help from "./screens/help"
import AdminLoginScreen from "./screens/adminLoginScreen";
import CreateAdminScreen from "./screens/createAdminScreen";
import ImportCSV from "./screens/importcsv";



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
          loader: RaceIdLoader
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
          path: "adminlogin",
          element: <AdminLoginScreen />
        },
        {
          path: "createadmin",
          element: <CreateAdminScreen />
        },
        {
          path: "importcsv",
          element:<ImportCSV />
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
