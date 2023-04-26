import React from "react";
import {
  BrowserRouter,
  createBrowserRouter, Route,
  RouterProvider, Routes,
} from "react-router-dom";
import Root from "./screens/root"
import SeriesDetailScreen from "./screens/seriesdetailscreen"
import CheckInScreen from "./screens/checkinscreen"
import EditRegisteredVolunteers from "./screens/editRegisteredVolunteers";
import RacesScreen from "./screens/racesscreen"
import VolunteerScreen from "./screens/volunteersscreen";
import RaceDetailScreen, { loader as RaceIdLoader } from "./screens/racedetailscreen"
import Help from "./screens/help"
import AdminLoginScreen from "./screens/adminLoginScreen";
import CreateAdminScreen from "./screens/createAdminScreen";
import LogOut from "./screens/logout";



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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<AdminLoginScreen />} />
            <Route path="races" element={<RacesScreen />} />
            <Route path="series" element={<SeriesDetailScreen />} />
            <Route path="checkin" element={<CheckInScreen />} />
            <Route path="editvolunteers" element={<EditRegisteredVolunteers />} />
            <Route path="volunteers" element={<VolunteerScreen />} />
            <Route path="adminlogin" element={<AdminLoginScreen />} />
            <Route path="createadmin" element={<CreateAdminScreen />} />
            <Route path="help" element={<Help />} />
            <Route path="logout" element={<LogOut />} />
          </Route>
        </Routes>
      </BrowserRouter>

    // <RouterProvider router={router} />

  );
}

export default App;
