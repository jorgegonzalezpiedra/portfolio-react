import "./DockBar.css";
import { Dock, DockIcon } from "../ui/dock";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdContactEmergency, MdWork } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

const DockBar = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="sticky flex flex-col bottom-0 items-center justify-center overflow-hidden mb-10">
      <Dock>
        <DockIcon>
          <Link to={`/`}>
            <IoIosHome className="h-6 w-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link to={`/experience`}>
            <MdWork className="h-6 w-6" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link to={`/skills`}>
            <FaCode className="h-6 w-6" />{" "}
          </Link>
        </DockIcon>
        <DockIcon>
        <Link to={`/contact`}>
          <MdContactEmergency className="h-6 w-6" />
        </Link>
        </DockIcon>
        <DockIcon>
          <button onClick={() => darkModeHandler()}>
            {
              dark && <IoSunny className="h-6 w-6" /> // render sunny when dark is true
            }
            {
              !dark && <IoMoon className="h-6 w-6" /> // render moon when dark is false
            }
          </button>
        </DockIcon>
      </Dock>
    </div>
  );
};

export { DockBar };
