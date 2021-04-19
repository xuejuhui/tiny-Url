import React from "react";

import AppBar from "./AppBar";
import MainDisplay from "./MainDisplay";

function Main() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <AppBar />
      <MainDisplay />
    </div>
  );
}

export default Main;
