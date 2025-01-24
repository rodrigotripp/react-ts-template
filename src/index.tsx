import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";

const App: React.FC = () => {
  return <AppLayout/>
};

const htmlEl = document.getElementById("root") as Element;
const root = ReactDOM.createRoot(htmlEl);

root.render(<App />);
