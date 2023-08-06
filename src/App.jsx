/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import NavbarComponent from "./layouts/Components";
import { Navbar } from 'reactstrap';
import classnames from "classnames";
import { useSkin } from './utility/hooks/useSkin';
import { useNavbarType } from "./utility/hooks/useNavbarType";
import { useNavbarColor } from "./utility/hooks/useNavbarColor";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {

  const { skin, setSkin } = useSkin();
  const { navbarType, setNavbarType } = useNavbarType();
  const { navbarColor, setNavbarColor } = useNavbarColor();
  const layoutStore = useSelector((state) => state.layout);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  // ** Update Window Width
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  //** This function will detect the Route Change and will hide the menu on menu item click
  useEffect(() => {
    if (menuVisibility && windowWidth < 1200) {
      setMenuVisibility(false);
    }
  }, [location]);

  //** Sets Window Size & Layout Props
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("resize", handleWindowWidth);
    }
  }, [windowWidth]);


  const contentWidth = layoutStore.contentWidth;

  const navbarClasses = {
    floating:
      contentWidth === "boxed" ? "floating-nav container-xxl" : "floating-nav",
    sticky: "fixed-top",
    static: "navbar-static-top",
    hidden: "d-none",
  };

  const bgColorCondition =
    navbarColor !== "" && navbarColor !== "light" && navbarColor !== "white";
  
  return (
    <>
      <Navbar
        expand="lg"
        container={false}
        light={skin !== "dark"}
        dark={skin === "dark" || bgColorCondition}
        color={bgColorCondition ? navbarColor : undefined}
        className={classnames(
          `header-navbar navbar align-items-center ${
            navbarClasses[navbarType] || "floating-nav"
          } navbar-shadow`
        )}
      >
        <div className="navbar-container d-flex content">
          <NavbarComponent
            setMenuVisibility={setMenuVisibility}
            skin={skin}
            setSkin={setSkin}
          />
        </div>
      </Navbar>
    </>
  )
}

export default App
