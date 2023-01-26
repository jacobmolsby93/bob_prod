import { Box } from "@mui/material";

// Images
import beijer from "../../../assets/beijer.webp";
import bosch from "../../../assets/bosch.webp";
import bahuahs from "../../../assets/bauhaus.webp";
import okq8 from "../../../assets/okq8.webp";
import optimera from "../../../assets/optimera.webp";
import bostik from "../../../assets/bostik.webp";
import dahl from "../../../assets/dahl.webp";
import rexel from "../../../assets/rexel.webp";

const images = [
  {
    id: 1,
    image: optimera,
    alt: "Optimera Logga",
    url: "https://www.optimera.se/bygghandel/proffs",
  },
  {
    id: 2,
    image: bosch,
    alt: "Bosch Logga",
    url: "https://www.bosch-professional.com/se/sv/",
  },
  {
    id: 3,
    image: bahuahs,
    alt: "Bauhaus Logga",
    url: "https://www.bauhaus.se/",
  },
  {
    id: 4,
    image: okq8,
    alt: "OkQ8 Logga",
    url: "https://www.okq8.se/",
  },
  {
    id: 5,
    image: beijer,
    alt: "Beijer Logga",
    url: "https://www.beijer.se",
  },
  {
    id: 6,
    image: bostik,
    alt: "Bostik Logga",
    url: "https://www.bostik.com/sweden/sv/",
  },
  {
    id: 7,
    image: dahl,
    alt: "Logga Dahl",
    url: "https://www.dahl.se/",
  },
  {
    id: 8,
    image: rexel,
    alt: "Logga Rexel",
    url: "https://www.rexel.se/swe/",
  },
].map((image) => ({
  id: image.id,
  image: image.image,
  url: image.url,
}));

import CardContainer from "./CardContainer.jsx";

const Clients = () => {
  return (
    <div>
      <Box justifyContent="center">
        <Box className="slider-wrap">
          <CardContainer images={images} speed={80000} />
        </Box>
      </Box>
    </div>
  );
};

export default Clients;
