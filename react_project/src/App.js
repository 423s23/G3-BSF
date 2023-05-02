import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/root"
import CheckInScreen, {loader as CheckinLoader} from "./screens/checkinscreen"
import RacesScreen from "./screens/racesscreen"
import RaceDetailScreen, { loader as RaceIdLoader } from "./screens/racedetailscreen"
import HelpScreen from "./screens/help"
import AdminLoginScreen from "./screens/adminLoginScreen";
import CreateAdminScreen from "./screens/createAdminScreen";
import ImportCSVScreen from "./screens/importcsv";




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
          path: "checkin/:raceId/:date",
          element: <CheckInScreen />,
          loader: CheckinLoader,
        },
        {
          path: "adminlogin",
          index: true,
          element: <AdminLoginScreen />
        },
        {
          path: "createadmin",
          element: <CreateAdminScreen />
        },
        {
          path: "importcsv",
          element:<ImportCSVScreen />
        },
        {
          path: "help",
          element: <HelpScreen />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
