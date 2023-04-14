import React from "react";
import ReactDOM from "react-dom";
import PositionPicker from "./editRegisteredVolunteers";

it("PositionPicker renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<PositionPicker></PositionPicker>, div);

})