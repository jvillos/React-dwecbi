import React from "react"; //this was mandatory before, but now? it looks like it still does
import { createRoot } from "react-dom/client";
import App from "./App";

// Render your React component instead
const root = createRoot(document.getElementById("app")); //this is the way you add content to the page
root.render(<App />); //we render in the root
