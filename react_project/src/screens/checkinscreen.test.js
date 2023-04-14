import React from "react";
import ReactDOM from "react-dom";
import CheckInScreen from "./checkinscreen";
import ContactInfo from "./checkinscreen";
import StepperFunction from "./checkinscreen";

it("CheckInScreen renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<CheckInScreen></CheckInScreen>, div);

})

it("ContactInfo renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<ContactInfo></ContactInfo>, div);

})

it("StepperFunction renders", () => {

    const div = document.createElement("div");
    ReactDOM.render(<StepperFunction></StepperFunction>, div);

})

