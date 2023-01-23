import React from 'react'
import { Box, Typography, Button, List, ListItem, useMediaQuery, useTheme } from "@mui/material"
import { Link } from "react-router-dom"

// Images
import kitchenimage from "../../../assets/kitchentips.webp"

// Animation
import AnimatedBox from '../../../animation/Animated'
import AnimatedLazyImage from '../../../components/LazyImage'

const steg = [
    {
        step: "Steg 1.",
        text: "Innan vi sätter igång, skriver vi ett avtal utformat av Konsumentverket, det så kallade Hantverksformuläret 14, där vi avtalar om en fast tidsplan, fast pris och vem er projektledare kommer att bli."
    },
    {
        step: "Steg 2.",
        text: "Sedan har vi ett uppstartsmöte för att säkerställa att köket blir precis som du vill ha det. Projektledaren, snickaren rörmokaren och elektrikern är med på mötet och tillsammans ritar vi upp hela köket med väggar, golv, tak, inredning samt vitvaror."
    },
    {
        step: "Steg 3.",
        text: "Efter uppstartsmötet börjar vi direkt med själva renoveringen och vi kommer att ha kontinuerlig kontakt med dig för att se till att allt blir precis som du vill."
    },
    {
        step: "Steg 4.",
        text: " Innan vi sätter igång, skriver vi ett avtal utformat av Konsumentverket, det så kallade Hantverksformuläret 14, där vi avtalar om en fast tidsplan, fast pris och vem er projektledare kommer att bli."
    }
]


export default function KitchenTips() {
    const theme = useTheme()
    const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"))
    const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"))

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
            <Typography variant="h2" className="title-font" sx={{ marginBottom: "1rem"}}>Tips inför en köksrenovering</Typography>
            <AnimatedLazyImage src={kitchenimage} style={{ width: "100%", height: "auto"}} title="Ett collage på olika kök" alt="" />
        </AnimatedBox>
        <Box>
            <AnimatedBox>
            <List component="ol">
                {steg.map((i) => (
                    <ListItem>
                        <p className="body-paragraph"><strong>{i.step}</strong>{i.text}</p>
                    </ListItem>
                ))}
            </List>
            </AnimatedBox>
            <AnimatedBox>
                <Box mt="3rem">
                    <Typography variant="h3" className="subtitle-font">Renovera köket med bob I stockholm</Typography>
                    <Box display="flex" mt="2rem">
                        <span
                            style={{
                            width: ".5rem",
                            height: "auto",
                            marginRight: "1rem",
                            backgroundColor: "#c2662d",
                            }}
                        ></span>
                        <p className="body-paragraph">
                            Ett av stegen, utifrån ovan nämnda punkter, är att planera. Vi på BOB menar på att planera en köksrenovering innebär så mycket mer än att endast rita upp en ritning, det handlar om att överväga varje litet steg. Med anledning av detta är det viktigt att du har koll på avgörande faktorer när det kommer till just din köksrenovering. BOB ser till att utföra detta steg i samband med att du skickat in din ansökan och vill bolla dina tankar samt idéer. Viktigt att veta är att besöket är helt kostnadsfritt. Ett exempel på några faktorer att ha koll på när det kommer till att renovera kök är ytan, ljusinsläppen samt materialet.
                            <br />
                            <br />
                            Ytans storlek, placering och form är avgörande när det kommer till kökets helhetsintryck, ljusinsläppet spelar stor roll när det kommer till ögats intryck och materialet samspelar med övriga rum i en bostad. Att ha koll på de viktigaste grundpelarna (med hänsyn till boendets förutsättningar) ger ofta en fantastisk bra grund när det kommer till just din köksplanering. Är du osäker eller behöver hjälp med att veta just dina behovsområden? Tveka inte på att fråga, självklart bistår vi på BOB med rådgivning där vi kan inflika med vår expertis gällande renovering av kök, badrum samt lägenheten i sin helhet.
                        </p>
                    </Box>
                </Box>
            </AnimatedBox>
            <AnimatedBox>
                <Box mt="3rem">
                    <Typography variant="h3" className="subtitle-font">Begär en offert från oss, du kan även ringa oss vi erbjuder fri rådgivning</Typography>
                    <Box display="flex" mt="2rem">
                        <span
                            style={{
                            width: ".5rem",
                            height: "auto",
                            marginRight: "1rem",
                            backgroundColor: "#c2662d",
                            }}
                        ></span>
                        <p className="body-paragraph">
                            På tal om expertis så är vår största rekommendation att, i samtliga fall rörande köksrenovering, ta hjälp av våra experter vilka ser detaljer som en annan inte kan se, ens med blotta ögat. De väger kökets för och nackdelar mot varandra och ger dig den realistiska planen du behöver ha för att genomföra dina specifika önskemål. Våra experter ser helt enkelt till att ge dig underlag för att slippa göra onödiga misstag på vägen när du ska påbörja att renovera köket.
                            <br />
                            <br /> 
                            Misstag som tenderar att kosta tid och pengar. Att renovera kök är dyrt men vi på BOB ser gärna att du får en offer med ett fast pris från början därav vikten av att göra rätt redan i uppstarten av bygget. I filmen nedan berättar vår kollega Eddie om tryggheten BOB garanterar dig som kund. Från det att du skickat in första ansökan tills dess att du besiktas köksrenoveringen så finns vi där för en dialog. Vi kommunicerar och bollar tankar och idéer längs med processens gång och finns även närvarande under besiktningen av köket. Att renovera kök kan verka omfattande, men med rätt hjälp på rätt plats, så blir projektet effektiv och smärtfritt.
                            <br />
                            <br />
                            Kontakta oss för en kostnadsfri offert och ett förutsättningslöst möte. Du når oss på 08-400 263 00 eller genom att skicka ett meddelande här.
                        </p>
                    </Box>
                    <Box className="mt-3" display="flex" justifyContent="flex-end">
                        <Link to="/trygg-renovering" style={{ textDecoration: "none"}}>
                            <Button variant="contained" sx={buttonStyleContained}>
                                Trygg Renovering
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </AnimatedBox>
        </Box>
    </Box>
  )
}
