import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";

import { Navbar, Offcanvas } from "react-bootstrap";

// Images
import logo from "../assets/boblogo.png";
import { useEffect } from "react";

const menuItems = [
  {
    menuItem: "Hem",
    url: "",
    id: 1,
  },
  {
    menuItem: "Badrum",
    url: "vara-tjanster/badrum",
    id: 2,
  },
  {
    menuItem: "Behörigheter",
    url: "behorigheter",
    id: 3,
  },
  {
    menuItem: "Kontakt",
    url: "kontakt",
    id: 4,
  },
  {
    menuItem: "Om Oss",
    url: "omoss",
    id: 5,
  },
];

export default function NavbarComp() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const breakpoint = useMediaQuery("(min-width:1200px)");
  const [scrollTop, setScrollTop] = useState(true);
  const [toggle, setToggle] = useState(false);
  let oldScrollY = 0;

  const [direction, setDirection] = useState("up");

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      window.scrollY >= 200 && setDirection("down");
    } else {
      setDirection("up");
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        setScrollTop(false);
      } else if (window.scrollY === 0) {
        setScrollTop(true);
      }
    });
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const handleClose = () => setToggle(false);
  const handleShow = () => setToggle(true);

  const buttonStyle = {
    width: "30px",
    minWidth: "30px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary[500],
    marginLeft: toggle ? "0" : "10px",
    "&>a": {
      color: theme.palette.background.default,
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    // Get the current pathname
    const currentPathname = window.location.pathname;

    // Iterate through menuItems and check if the current pathname matches a menu item's url
    const activeItem = menuItems.find(
      (item) => `/${item.url}` === currentPathname
    );

    // If a match is found, set the activeLink state to the matching menu item's name
    if (activeItem) {
      setActiveLink(activeItem.menuItem);
    }
  }, []);

  const handleClick = (event) => {
    toggle && handleClose();
    setActiveLink(event.target.dataset.replace);
  };

  return (
    <Navbar
      bg={!scrollTop ? "dark" : "undefined"}
      expand="lg"
      fixed="top"
      style={{
        transform:
          !smallScreen &&
          (!scrollTop + 100 && direction === "down"
            ? "translateY(-100%)"
            : "translateY(0)"),
        transition: "500ms",
        boxShadow: !scrollTop ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "",
      }}
    >
      <Box
        className="container"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="Company logo"
                style={{ width: "80px", height: "80px" }}
              />
            </Link>
          </Navbar.Brand>
        </Box>
        {/* Desktop Nav */}
        {breakpoint ? (
          <Box display="flex">
            {menuItems.map((item) => (
              <Link
                onClick={(event) => handleClick(event)}
                className={`nav-link-main ${
                  activeLink === item.menuItem ? "active" : ""
                }`}
                aria-label={`Länk till ${item.menuItem}`}
                key={item.url}
                to={`/${item.url}`}
                data-replace={item.menuItem}
                style={{
                  color: toggle ? "#000" : theme.palette.background.default,
                }}
              >
                {item.menuItem}
              </Link>
            ))}
            <Box>
              <a
                aria-label="Länk til företagets email"
                href="mailto:hej@bobbadrum.se"
                style={{ width: "30px", height: "30px" }}
              >
                <Button
                  aria-label="Email icon"
                  variant="contained"
                  sx={buttonStyle}
                >
                  <MailOutlineIcon
                    sx={{
                      fontSize: "20px",
                      color: theme.palette.background.default,
                    }}
                  />
                </Button>
              </a>
              <a href="tel:08333663" aria-label="Företagets telefon-nummer">
                <Button
                  aria-label="Telefon icon"
                  name="Mail Ikon"
                  variant="contained"
                  sx={buttonStyle}
                >
                  <CallIcon
                    sx={{
                      fontSize: "20px",
                      color: theme.palette.background.default,
                    }}
                  />
                </Button>
              </a>
            </Box>
          </Box>
        ) : (
          /* Movile nav*/
          <nav>
            <Box>
              <MenuIcon
                sx={{
                  color: "#fff",
                  fontSize: "2rem",
                  zIndex: "10",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                aria-controls="offcanvas-expand"
                onClick={handleShow}
              />
            </Box>

            <Offcanvas show={toggle} placement="end" onHide={handleClose}>
              <Box display="flex" justifyContent="flex-end" padding="20px">
                <Button
                  aria-label="Stäng Meny"
                  onClick={handleClose}
                  sx={{ color: "#000" }}
                >
                  <CloseIcon />
                </Button>
              </Box>
              <Box className="offcanvas-content">
                {menuItems.map((item) => (
                  <Typography
                    variant="h1"
                    className="subtitle-font"
                    key={item.url}
                    style={{
                      color: "#1d1d1d",
                      marginBottom: "20px",
                    }}
                  >
                    <Link
                      aria-label={`Länk till ${item.menuItem}`}
                      onClick={(event) => handleClick(event)}
                      className={`nav-link-main ${
                        activeLink === item.menuItem ? "active" : ""
                      }`}
                      title="Vad BOB står för"
                      data-replace={item.menuItem}
                      to={`/${item.url}`}
                      style={{
                        color: "#1d1d1d",
                      }}
                    >
                      {item.menuItem}
                    </Link>
                  </Typography>
                ))}
              </Box>
              <Box>
                {/* Canvas Footer */}
                <Box sx={{ padding: "15px" }}>
                  <Button
                    aria-label="Tidigare objekt"
                    variant="contained"
                    sx={{
                      marginTop: smallScreen ? "10px" : "",
                      borderRadius: "0",
                      backgroundColor: theme.palette.primary[500],
                      marginRight: "10px",
                      color: theme.palette.background.default,
                      "&:hover": {
                        backgroundColor: theme.palette.primary[300],
                      },
                    }}
                  >
                  </Button>
                  <Button
                    aria-label="Företagets Telefon-nummer"
                    sx={{
                      marginTop: smallScreen ? "10px" : "",
                      borderRadius: "0",
                      border: "1px solid #1d1d1d",
                      "&>a": {
                        textDecoration: "none",
                        color: "#1d1d1d",
                      },
                      "&:hover": {
                        border: "1px solid #2d2d2d",
                      },
                    }}
                    name="Telefon Nummer 08-333663"
                    variant="outlined"
                  >
                    <CallIcon sx={{ marginRight: "5px", color: "#1d1d1d" }} />
                    <a
                      aria-label="Telefon nummer 08333663"
                      href="tel:08333663"
                      className="button-text"
                    >
                      08 - 33 36 63
                    </a>
                  </Button>
                </Box>
              </Box>
            </Offcanvas>
          </nav>
        )}
      </Box>
    </Navbar>
  );
}
