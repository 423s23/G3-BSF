import React from "react";
import ReactDOM from "react-dom";
import SeriesDetailScreen from "./seriesdetailscreen";

it("SeriesDetailScreen renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<SeriesDetailScreen></SeriesDetailScreen>, div);

})