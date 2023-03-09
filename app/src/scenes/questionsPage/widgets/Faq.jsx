import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Questions() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box className="row">
      <Typography variant="h2" className="title-font">
        Frågor Och Svar
      </Typography>
      <Box className="mt-3 row">
        {qa.map((item) => (
          <Box className="col-12 col-lg-6" padding="10px" key={item.id}>
            <Box padding="10px" border="5px solid rgba(0, 0, 0, 0.05)">
              <Typography variant="h3" fontWeight="bold">
                {item.question}
              </Typography>
              <p className="body-paragraph">{item.answer}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const qa = [
  {
    id: 1,
    question: "Tidsåtgång",
    answer:
      "Inför varje projekt får du som kund en fast tidsplan – vilket vi naturligtvis har skrivit in i vårt avtal med dig.",
  },
  {
    id: 2,
    question: "Arbetstider",
    answer:
      "Om inte du har några andra önskemål, så vill vi gärna ha tillgång till arbetsplatsen mellan klockan 07:00 och 16:00.",
  },
  {
    id: 3,
    question: "Behörigheter",
    answer:
      "Vi har alla behörigheter som krävs för att kunna utföra ett fackmannamässigt arbete enligt gällande branschregler.",
  },
  {
    id: 4,
    question: "Offert",
    answer:
      "Efter vårt hembesök får du alltid en skriftlig offert per mail. Offerten ligger sedan som grund för det kommande avtalet.",
  },
  {
    id: 5,
    question: "Betalning",
    answer:
      "Du kommer att få en betalningsplan som bygger på att du inte behöver betala något i förväg; du betalar endast efter utfört arbete i varje delmoment. Och en tydlig betalningsplan finns alltid med i avtalet.",
  },
  {
    id: 6,
    question: "ROT-avdrag",
    answer:
      "Du som kund har rätt att dra av 30 procent av arbetskostnaden. Den sammanlagda skattereduktionen för ROT-arbete är maximalt 50 000 kronor per person och år – oavsett ålder. Kontrollera gärna med Skatteverket om du rätt till ROT-avdrag.",
  },
  {
    id: 7,
    question: "Analys",
    answer:
      "Vi gör alltid hembesök för att få en tydlig bild av vad som skall utföras. När du berättat hur du vill ha det eller vad du vill uppnå, så gör vi en analys och presenterar en lösning.",
  },
  {
    id: 8,
    question: "Fast pris",
    answer:
      "Vi lämnar alltid ett fast pris på arbetet, där vi inkluderar byggmaterial, transporter och arbetstimmar.",
  },
  {
    id: 9,
    question: "Ändringar eller tillägg",
    answer:
      "Ibland kommer man på att man vill göra en ändring under arbetet. En lampknapp som behöver flyttas eller så kanske det finns något annat som du vill ändra eller lägga till. Ändringar och tillägg ska du alltid beställa skriftligt via mail och du får alltid en skriftlig bekräftelse tillbaka från oss.",
  },
  {
    id: 10,
    question: "Besiktning",
    answer:
      "Efter varje avslutat arbete gör vi alltid en besiktning för att kvalitetssäkra slutresultatet. I samband med det får all dokumentation som kvalitetsdokument, intyg för vatteninstallationer samt intyg på att eventuella värmeslingor är korrekt monterade.",
  },
];
