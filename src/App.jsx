import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";
import Navebar from "./components/navebar/Navebar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [open, setOpen] = useState(true);
  const [navOpen, SetNavOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    SetNavOpen(!navOpen);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && SetNavOpen(!navOpen)
    );
  }, []);

  const [isActive, setIsActive] = useState(false);

  const laptopWidthThreshold = 1024; // Define a threshold for laptop screen width

  const updateState = () => {
    const screenWidth = window.innerWidth;
    setIsActive(screenWidth < laptopWidthThreshold);
  };
  useEffect(() => {
    updateState(); // Initial state update

    window.addEventListener("resize", updateState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return (
    <>
      <Sidebar open={open} navOpen={navOpen} navStatus={isActive}/>
      <div className={"lg:ml-[5em]"}>
        <Navebar
          open={open}
          navOpen={navOpen}
          handleOpen={handleOpen}
          className=""
        />

        <div className="text-white md:ml-2  mr-3 lg:mr-0">
          <h1 className="font-sans font-bold m-2 ml-3">Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
