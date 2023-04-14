import React from "react";
import ReactDOM from "react-dom";
import Help from "./help";

it("Help screen renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<Help></Help>, div);

})