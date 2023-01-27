import React, { lazy, Suspense, useState, useEffect } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { Route, Routes, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import LoadingScreen from "./components/LoadingScreen.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FixedButtons from "./components/FixedButtons.jsx";

// Not found
import NotFound from "./components/404Page.jsx";

// Scenes
const HomePage = lazy(() => import("./scenes/homePage/index.jsx"));
const Services = lazy(() => import("./scenes/servicesPage/index.jsx"));
const Certifications = lazy(() =>
  import("./scenes/certificationsPage/index.jsx")
);
const Contact = lazy(() => import("./scenes/contactPage/index.jsx"));
const About = lazy(() => import("./scenes/aboutPage/index.jsx"));
const Bathroom = lazy(() => import("./scenes/bathroomPage/index.jsx"));
const Kitchen = lazy(() => import("./scenes/kitchenPage/index.jsx"));
const Comfort = lazy(() => import("./scenes/comfortPage/index.jsx"));
const Questions = lazy(() => import("./scenes/questionsPage/index.jsx"));
const ProjectBathroom = lazy(() =>
  import("./scenes/referenceBathroom/index.jsx")
);
const ProjectKitchen = lazy(() =>
  import("./scenes/referenceKitchen/index.jsx")
);
const Remodel = lazy(() => import("./scenes/totalRemodel/index.jsx"));
const References = lazy(() => import("./scenes/referencePage/index.jsx"));
const Detail = lazy(() => import("./scenes/referenceDetail/index.jsx"));

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [isLoading, setIsloading] = useState(true);
  const location = useLocation();

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<LoadingScreen isLoading={isLoading} />}>
          <Navbar />
          <FixedButtons />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/vara-tjanster" element={<Services />}></Route>
            <Route
              path="/vara-tjanster/badrumsrenovering"
              element={<Bathroom />}
            ></Route>
            <Route
              path="/vara-tjanster/koksrenovering"
              element={<Kitchen />}
            ></Route>
            <Route
              path="/vara-tjanster/totalrenovering-stockholm"
              element={<Remodel />}
            ></Route>
            <Route path="/behorigheter" element={<Certifications />}></Route>
            <Route path="/kontakt" element={<Contact />}></Route>
            <Route path="/offertforfragan" element={<Contact />}></Route>
            <Route path="/referenser" element={<References />}></Route>
            <Route
              path="/referenser/koksrenoveringar"
              element={<ProjectKitchen />}
            ></Route>
            <Route
              path="/referenser/badrumsrenovering"
              element={<ProjectBathroom />}
            ></Route>
            <Route path="/referenscase/:titleUrl" element={<Detail />} />
            <Route path="/omoss" element={<About />}></Route>
            <Route path="/vanliga-fragor" element={<Questions />}></Route>
            <Route path="/trygg-renovering" element={<Comfort />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
