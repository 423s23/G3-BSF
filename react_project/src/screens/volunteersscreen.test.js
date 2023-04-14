import React from "react";
import ReactDOM from "react-dom";
import VolunteerScreen from "./volunteersscreen";

it("VolunteerScreen renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<VolunteerScreen></VolunteerScreen>, div);

})