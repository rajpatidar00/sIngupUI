import "./App.css";
import React from "react";
import AppRoutes from "./Routes/AppRoutes";
function App() {
  return (
    <>
      <div className="bg-white flex items-center justify-center gap-5">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
