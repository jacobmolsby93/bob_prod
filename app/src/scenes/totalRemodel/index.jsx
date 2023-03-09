import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
// Widgets
import Total from "./widgets/Total";
// Components
import Spacer from "../../components/Spacer";
import Credits from "../../components/Credits";
//Animation
import AnimatedBox from "../../animation/Animated";
// Images
const heroImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/kitchenhero.webp";

export default function Remodel() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const titleFontSize = "54px";
  return (
    <Box>
      <Box className="landing-box">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center top",
          }}
        ></Box>
        {/* Hero Section */}
        <Box
          className="container"
          sx={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "5%",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Box className="row">
              <Typography
                variant="h1"
                fontWeight="bold"
                className="hero_title"
                fontSize={
                  smallScreen
                    ? `clamp(32px, 4vw, ${titleFontSize})`
                    : titleFontSize
                }
                textTransform="uppercase"
                color="#E6E6E6"
              >
                Totalrenovering Tips
              </Typography>
              <Box className="col-12 col-lg-7">
                <p className="button-text" style={{ color: "#E6E6E6" }}>
                  Behöver du totalrenovera hemma? Vi kan hjälpa er med
                  badrumsrenoveringen, köksrenoveringen, tvättstugan eller
                  toaletten. Om du vill totalrenovera och vill ha en expert som
                  utför våtutrymmena så är vi rätt kontakt för dig!
                </p>
              </Box>
              <Box>
                <Button
                  aria-label="Klicka för att komma till kontaka oss sidan"
                  variant="contained"
                  sx={{
                    marginTop: "30px",
                    borderRadius: "0",
                    backgroundColor: theme.palette.primary[500],
                    marginRight: "20px",
                    "&>a": {
                      color: theme.palette.background.default,
                      textDecoration: "none",
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary[600],
                    },
                  }}
                >
                  <Link
                    to="/kontakt"
                    className="button-text"
                    aria-label="Länk till kontakta oss"
                  >
                    Kontakta Oss
                  </Link>
                </Button>
              </Box>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />

      <section id="tips">
        <Box className="container">
          <Total />
        </Box>
      </section>
      <Spacer />

      <section></section>

      <Spacer />
      <section className="credits-bg">
        <Credits dark={true} />
      </section>
    </Box>
  );
}
