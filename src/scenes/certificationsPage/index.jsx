// Components
import Spacer from "../../components/Spacer.jsx";
import Intro from "../../components/Intro.jsx";
import LandingBox from "../../components/LandingBox.jsx";

import BoxSelector from "./widgets/BoxSelectorCert.jsx";
// Images
import landingImage from "../../assets/behorigheterbackground.webp";
import image from "../../assets/certifications.webp";

// Animation
import AnimatedBox from "../../animation/Animated.jsx";

export default function CertPage() {
  return (
    <div>
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
      <iframe
        src="https://widget.reco.se/v2/widget/4000545?mode=HORIZONTAL_QUOTE&inverted=false&border=true"
        height="225"
        style={{
          width: "100%",
          border: "0",
          display: "block",
          overflow: "hidden",
        }}
        data-reactroot=""
      ></iframe>
    </div>
  );
}
