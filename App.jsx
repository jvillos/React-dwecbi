import React from "react";

export default function App() {
  //THIS IS JSX. A markup system simmilar to html that we use in react
  return (
    <>
      <header>
        <img src="assets/images/js-logo-xs.png" alt="JavaScript logo" />
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