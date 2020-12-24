/**
 * @file index.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import { Countdown } from "./Components";
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById("root"));

Countdown();

$("document").ready(function () {
  $("#title").fadeIn("slow", function () {
      console.log("Loaded Title.");
  });
  setTimeout(function () {
    $("#daycount").fadeIn("slow", function () {
      console.log("Loaded Daycount.");
    });
  }, 1000);
  setTimeout(function () {
    $("#music-button").fadeIn("slow", function () {
      console.log("Loaded Daycount.");
    });
  }, 2000);
  setTimeout(function () {
    $(".footer").fadeIn("slow", function () {
      console.log("Loaded Footer.");
    });
  }, 2000);
});
