import React from "react";
import jsImage from "./assets/images/js-logo-xs.png"; //we import images this way and use it in the src above between {}

export default function App() {
  //THIS IS JSX. A markup system simmilar to html that we use in react
  //if you return more than one tag, you need to wrap it in one, such as an empty <></>
  return (
    <>
      <header>
        <img src={jsImage} alt="JavaScript logo" />
        <h1>JavaScript Refresher</h1>
      </header>

      <ul>
        <li>Base Syntax & Rules</li>
        <li>Variables, Values & Operators</li>
        <li>Functions</li>
        <li>Objects</li>
        <li>Arrays</li>
        <li>Control Structures</li>
        <li>Browser APIs & The DOM</li>
        <li>Essential Features Used By React</li>
        <li>Tricky Parts</li>
      </ul>
    </>
  );
}
