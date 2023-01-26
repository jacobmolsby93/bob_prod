import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Navbar, Offcanvas } from "react-bootstrap";

import { AnimatePresence, motion } from "framer-motion";

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
    menuItem: "Våra Tjänster",
    url: "vara-tjanster",
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

const options = [
  {
    menuItem: "Badrum",
    url: "vara-tjanster/badrumsrenovering",
    id: 1,
  },
  {
    menuItem: "Köksrenovering",
    url: "vara-tjanster/koksrenovering",
    id: 2,
  },
  {
    menuItem: "Vanliga Frågor",
    url: "vanliga-fragor",
    id: 3,
  },
  {
    menuItem: "Trygg Renovering",
    url: "trygg-renovering",
    id: 4,
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
        setShowMenu(false)
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

  // Dropdown menu

  const [showMenu, setShowMenu] = useState(false);

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

  const expandClose = {
    color: theme.palette.primary[500],
    fontSize: "2rem",
  };
  const expandCloseDesktop = {
    color: theme.palette.primary[500],
    fontSize: "1.3rem",
  }

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
    console.log(event.target)
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
            {menuItems.map((item) =>
              item.url === "vara-tjanster" ? (
                /* Dropdown menu navbar desktop */
                <Box
                  key={`${item.url} + ${item.id}`}
                  position="relative"
                  display="flex"expandClose
                  onMouseLeave={() => setShowMenu(false)}
                >
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
                      position: "relative",
                      display: "flex",
                      alignItems: "center"
                    }}
                    onMouseOver={() => setShowMenu(true)}
                  >
                    {item.menuItem}
                    <motion.div
                    style={{ marginLeft: ".5rem"}}
                          animate={{ rotate: showMenu ? -180 : 0, transition: { type: "spring", bounce: .5, duration: .5}}}
                        >
                      <ExpandMoreIcon sx={expandCloseDesktop}/>
                    </motion.div>
                  </Link>
                  <motion.div
                    style={{
                      display: showMenu ? "flex" : "none",
                      transition: "300ms",
                    }}
                    onMouseLeave={() => setShowMenu(false)}
                  >
                    <motion.div
                      style={dropdownBox}
                      animate={{
                        opacity: 1,
                        y: showMenu ? "0" : "50px",
                        transition: {
                          type: "spring",
                          bounce: 0.1,
                          duration: 0.3,
                        },
                      }}
                    >
                      <List component="nav" sx={{ padding: "0" }}>
                        {options.map((listItem) => (
                          <ListItem sx={{ padding: 0 }} key={listItem.url}>
                            <Link
                              to={listItem.url}
                              className={`nav-link-main ${
                                activeLink === listItem.menuItem ? "active" : ""
                              }`}
                              data-replace={listItem.menuItem}
                              style={{
                                color: toggle
                                  ? "#000"
                                  : theme.palette.background.default,
                                position: "relative",
                              }}
                            >
                              {listItem.menuItem}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </motion.div>
                  </motion.div>
                </Box>
              ) : (
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
              )
            )}
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
                <AnimatePresence>
                  {menuItems.map((item) =>
                    // Dropdown menu offcanvas
                    item.url === "vara-tjanster" ? (
                      <Box position="relative" display="block" width="100%" key={item.id}>
                        <motion.div
                        onClick={() => setShowMenu(!showMenu)}
                          style={{
                            position: "absolute",
                            top: "5px",
                            right: "0",
                          }}
                          animate={{ rotate: showMenu ? -180 : 0, transition: { type: "spring", bounce: .5, duration: .5}}}
                        >
                          <ExpandMoreIcon
                            style={expandClose}
                          />
                        </motion.div>
                        <Typography
                          variant="h2"
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
                        {showMenu && (
                          <motion.div
                            style={{
                              padding: "20px",
                              borderRadius: "4px",
                            }}
                            initial={{ y: "-50px", opacity: 0 }}
                            animate={{
                              y: 0,
                              opacity: 1,
                              transition: { type: "spring", duration: 0.3 },
                            }}
                          >
                            <List component="nav" sx={{ padding: "0" }}>
                              {options.map((listItem) => (
                                <ListItem
                                  sx={{ padding: 0 }}
                                  key={`${listItem.id} + ${listItem.url}`}
                                >
                                  <Typography
                                    variant="h2"
                                    className="subtitle-font"
                                    key={item.url}
                                    style={{
                                      color: "#1d1d1d",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <Link
                                      className={`nav-link-main ${
                                        activeLink === listItem.menuItem
                                          ? "active"
                                          : ""
                                      }`}
                                      to={listItem.url}
                                      data-replace={listItem.menuItem}
                                      style={{
                                        color: toggle
                                          ? "#000"
                                          : theme.palette.background.default,
                                        position: "relative",
                                      }}
                                    >
                                      {listItem.menuItem}
                                    </Link>
                                  </Typography>
                                </ListItem>
                              ))}
                            </List>
                          </motion.div>
                        )}
                      </Box>
                    ) : (
                      <Typography
                        variant="h2"
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
                    )
                  )}
                </AnimatePresence>
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
                      "&:hover": {
                        backgroundColor: theme.palette.primary[300],
                      },
                    }}
                  >
                    <Link
                      className="body-paragraph unstyled-link"
                      style={{ color: "#fff" }}
                    >
                      Tidiager Objekt
                    </Link>
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

const dropdownBox = {
  position: "absolute",
  top: "100%",
  left: "0",
  backgroundColor: "rgba(33, 37, 41)",
  width: "max-content",
  padding: "20px 20px",
  height: "auto",
};
