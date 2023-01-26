import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import introImage from "../../../assets/landingbackground4.webp";

// Animation
import AnimatedBox from "../../../animation/Animated";
import AnimatedLazyImage from "../../../components/LazyImage";

export default function Total() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: "none",
    fontSize: ".8rem",
    backgroundColor: theme.palette.primary[500],
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };
  return (
    <Box className="row">
      <AnimatedBox>
        <Typography
          variant="h2"
          className="title-font"
          sx={{ marginBottom: "1rem" }}
        >
          Ttotalrenovering I Stockholm Med Omnejd
        </Typography>
        <AnimatedLazyImage
          src={introImage}
          style={{ width: "100%", height: "auto" }}
          title="Ett collage på olika kök"
          alt=""
        />
      </AnimatedBox>
      <Box>
        {textContent.map((item) => (
          <AnimatedBox key={item.id}>
          <Box mt="2rem">
          <Typography variant="h3" className="subtitle-font">
            {item.title}
          </Typography>
          <Box display="flex" mt="1rem">
          <span
            style={{
              width: "2%",
              maxWidth: "2px",
              height: "auto",
              marginRight: "1rem",
              backgroundColor: "#c2662d",
            }}
          ></span>
          <p className="body-paragraph">
            {item.paragraph}
          </p>
          </Box>
          </Box>
          </AnimatedBox>
        ))}
            <Box className="mt-3" display="flex" justifyContent="flex-end">
              <Link to="/trygg-renovering" style={{ textDecoration: "none" }} aria-label="Länk till trygg renovering">
                <Button variant="contained" sx={buttonStyleContained} aria-label="Klicka för att komma till trygg renoverings sidans">
                  Trygg Renovering
                </Button>
              </Link>
            </Box>
          </Box>
    </Box>
  );
}

const textContent = [
  {
    title: "BOB Våtrumsrenovering Vill Förändra Totalrenovering Trygghet Och Kommunikation Måste Vara Ledorden.",
    paragraph: "I Sverige finns det en uppfattning om att det är krångligt att anlita en hantverkare för att renovera lägenheten eller huset. Många tycker att det är svårt att få tag i sin hantverkare och svårt att veta vad priset landar på. BOB VÅTRUMSRENOVERING är ett familjeföretag som försöker slå hål på dessa myter – vi renoverar till fast pris och du får en specifik projektledare hos oss som du alltid kan höra av dig till. Detta kallar vi för trygg renovering. Det finns en stor efterfrågan på hantverkare just nu. Det beror delvis på att människor ser ett stort värde i att fräscha upp sin boendestandard och dels på att en renovering kan höja bostadens värde betydligt. ",
    id: 1
  },
  {
    title: "BOB VÅTRUMSRENOVERING Är Ett Familjeföretag.",
    paragraph: "med stor erfarenhet av att hjälpa privatpersoner med renoveringar av kök. Vi ger dig en offert med ett fast pris innan arbetet påbörjas så du slipper oroa dig för vad kostnaden ska landa på i slutändan. Du får också en projektledare hos oss som är den enda personen du behöver ha kontakt med under hela processen. På så sätt behöver du varken oroa dig över priset eller över att falla mellan stolarna i kontakten med oss.",
    id: 2,
  },
  {
    title: "BOB VÅTRUMSRENOVERING Hjälper Dig Med Din Lägenhetsrenovering.",
    paragraph: `Vi hjälper kunder över hela Stockholm med
    våtrumsrenoveringar i lägenheter. Vi arbetar utifrån kundens
    önskemål och kan hjälpa till med det mesta som hör en renovering
    till. I ett sådant arbete genomför vi ofta en köksrenovering för
    att höja standarden på köket. Renovera köket är också ett bra
    sätt att höja värdet på en bostad inför en eventuell försäljning
    av lägenheten. Vi hjälper också till med en badrumsrenovering
    för att göra badrummet snyggare och mer funktionellt, allt
    utifrån dina önskemål. Om badrummet är mycket slitet så kan vi
    också totalrenovera badrummet. 
    Totalrenovering av ett gammalt
    hus Om du bor i ett gammalt hus med omfattande renoveringsbehov,
    så kan vi hjälpa dig att renovera upp våtutrymmena från grunden.
    En totalrenovering av ett gammalt hus innebär ofta att vi river
    ned det mesta i huset för att bygga upp det från grunden. Husets
    stammar behöver som regel bytas i dessa fall, det hjälper vi dig
    med. En vanlig uppfattning är att husen som är i så pass dåligt
    skick att de behöver totalrenoveras är för dyra att rusta upp,
    vår erfarenhet är att det går att göra mycket med små medel. Hör
    av dig till oss för en offert.
    `,
    id: 3,
  }
]