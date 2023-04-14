import React from "react";
import ReactDOM from "react-dom";
import RacesScreen from "./racesscreen";

it("RaceScreen renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<RacesScreen></RacesScreen>, div);

})