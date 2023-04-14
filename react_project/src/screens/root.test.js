import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";

it("Root renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<Root></Root>, div);

})