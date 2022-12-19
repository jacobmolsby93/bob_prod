import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// Scenes
import HomePage from "./scenes/homePage";
import About from "./scenes/aboutPage"
import Contact from "./scenes/contactPage"
import Proposal from "./scenes/proposalPage"
import Project from "./scenes/projectPage"
import Certifications from "./scenes/certificationsPage"
import Services from "./scenes/servicesPage"

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/referenser" element={<Project/>}></Route>
              <Route path="/vara-tjanster" element={<Services/>}></Route>
              <Route path="/offertforfragan" element={<Proposal/>}></Route>
              <Route path="/behorigheter" element={<Certifications/>}></Route>
              <Route path="/kontakt" element={<Contact/>}></Route>
              <Route path="/om-oss" element={<About/>}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
