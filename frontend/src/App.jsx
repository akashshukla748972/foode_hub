import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
      <Navbar />
      <h1 class="text-3xl font-bold underline">Foodi Hub!</h1>
    </div>
  );
};

export default App;
