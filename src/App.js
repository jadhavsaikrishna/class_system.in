import React, { useState } from "react";
import NavBar from "./Component/Nav";
import Endclass from "./Component/Endclass";
function App() {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <NavBar btnClick={handleChange} />
      <Endclass btnClick={handleChange} open={open} />
    </>
  );
}

export default App;
