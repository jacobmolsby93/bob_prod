import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import {
  DarkModeOutlined,
  LightModeOutlined,
  MailOutline,
  Call,
} from "@mui/icons-material";

// Images
import logo from "../assets/bob_logo.png";
import reco from "../assets/reeco.png";

export default function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const menuItems = [
    {
      menuItem: "Referens Projekt",
      url: "referens",
    },
    {
      menuItem: "Våra Tjänster",
      url: "vara-tjanster",
    },
    {
      menuItem: "Offer Förfrågan",
      url: "offert-forfragan",
    },
    {
      menuItem: "Behörigheter",
      url: "behorigheter",
    },
    {
      menuItem: "Kontakt",
      url: "kontakt",
    },
    {
      menuItem: "Om Oss",
      url: "om-oss",
    },
  ];

  return (
    <Box
      className="nav_top_main container"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box alignItems="center" display="flex">
        <img
          src={logo}
          alt="Company logo"
          style={{ width: "80px", height: "auto" }}
        />
        <img
          src={reco}
          alt="reco logo"
          style={{ width: "60px", height: "auto" }}
        />
      </Box>
      <List sx={{ display: "flex" }} component="nav">
        <ListItem sx={{ padding: "4px" }}>
          <Box
            onClick={() => dispatch(setMode())}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            {theme.palette.mode === "dark" ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={theme.palette.primary[500]}
                padding=".4rem"
                borderRadius="50%"
              >
                <LightModeOutlined
                  sx={{
                    fontSize: "20px",
                    color: theme.palette.background.default,
                  }}
                />
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={theme.palette.primary[500]}
                padding=".4rem"
                borderRadius="50%"
              >
                <DarkModeOutlined
                  sx={{
                    fontSize: "20px",
                    color: theme.palette.background.default,
                  }}
                />
              </Box>
            )}
          </Box>
        </ListItem>
        <List sx={{ display: "flex" }} component="nav">
          {menuItems.map((item) => (
            <ListItem sx={{ padding: "4px" }} key={item.url}>
              <Link
                to={`/${item.url}`}
                style={{
                  color: theme.palette.background.default,
                  textDecoration: "none",
                  width: "max-content",
                  "&:hover": {
                    color: theme.palette.primary.light,
                    cursor: "pointer",
                    textDecoration: "none",
                  },
                }}
              >
                {item.menuItem}
              </Link>
            </ListItem>
          ))}
        </List>
        <ListItem sx={{ padding: "4px" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={theme.palette.primary[500]}
            padding=".4rem"
            borderRadius="50%"
          >
            <MailOutline
              sx={{ fontSize: "20px", color: theme.palette.background.default }}
            />
          </Box>
        </ListItem>
        <ListItem sx={{ padding: "4px" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={theme.palette.primary[500]}
            padding=".4rem"
            borderRadius="50%"
          >
            <Call
              sx={{ fontSize: "20px", color: theme.palette.background.default }}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
