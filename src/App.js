import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Hero />
      <h2>stripe submenus setup</h2>
    </>
  );
}

export default App;
