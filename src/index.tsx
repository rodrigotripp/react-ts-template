import React from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  return <div>Hola Mundo Mundial with Rodrigo!</div>;
};

const htmlEl = document.getElementById("root") as Element;
const root = ReactDOM.createRoot(htmlEl);

root.render(<App />);
