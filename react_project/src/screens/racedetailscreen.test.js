import React from "react";
import ReactDOM from "react-dom";
import RaceDetailScreen from "./racedetailscreen";

it("RaceDetailScreen renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<RaceDetailScreen></RaceDetailScreen>, div);

})