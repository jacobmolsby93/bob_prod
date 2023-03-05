import { Box } from "@mui/material";

// Components
import Spacer from "../../components/Spacer.jsx";
import Intro from "../../components/Intro.jsx";
import Contact from "../../components/Contact.jsx";
import LandingBox from "../../components/LandingBox.jsx";
// Animation
import AnimatedBox from "../../animation/Animated.jsx";
import BoxSelector from "./widgets/BoxSelectorCert.jsx";
// Images
const landingImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/behorigheterbackground.webp";
const image =
  "https://storage.googleapis.com/bob-prod-images/media/assets/certifications.webp";

export default function CertPage() {
  return (
    <Box>
      <LandingBox image={landingImage} title="Behörigheter" />
      <Spacer />
      <AnimatedBox>
        <Intro
          image={image}
          title="Varför Ska Din Hantverkare Vara Behörig ?"
          body="Våra hantverkare har alla behörigheter och certifikat som krävs för att genomföra badrumsrenoveringar på ett säkert och professionellt sätt hemma hos dig. Samt en ansvarsförsäkring hos Trygg Hansa. Genom att våra hantverkare har dessa behörigheter och certifikat, kan du som kund vara säker på att allt arbete utförs i enlighet med branschregler."
          alt="Collage av bilder på badrum samt en bild på ritningar"
          to="/kontakt"
          label="Länk till kontakt sidan"
          linkName="Kontakta oss"
          pageLink={false}
        />
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <BoxSelector />
      </AnimatedBox>
      <Spacer />

      <AnimatedBox>
        <Contact />
        <Spacer />
      </AnimatedBox>
    </Box>
  );
}
