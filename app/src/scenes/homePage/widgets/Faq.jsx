import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// JSON data with questions
import faqData from "../../../data/faqData.json";

export default function Faq(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // Handle question
  const [questions, setQuestions] = useState(faqData.questions);

  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&>a": {
      textDecoration: "none",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const handleToggleAnswer = (id) => {
    // Find the index of the question in the array
    const index = questions.findIndex((q) => q.id === id);

    // Update the showAnswer property of the question
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      showAnswer: !updatedQuestions[index].showAnswer,
    };

    // Update the state with the updated array of questions
    setQuestions(updatedQuestions);
  };

  return (
    <>
      {questions.map((question) => (
        <Box key={question.id} sx={{ marginBottom: "10px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`question-${question.id}-content`}
              id={`question-${question.id}-header`}
              onClick={() => handleToggleAnswer(question.id)}
            >
              <Typography
                variant="h5"
                component="h3"
                style={{ margin: "0", paddingLeft: "20px", fontWeight: "600" }}
              >
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="col-12" paddingLeft="20px">
                <p className="body-paragraph" style={{ margin: "0" }}>
                  "{question.answer}"
                </p>
              </Box>
              {question.link && (
                <Button variant="contained" sx={buttonStyleContained} aria-label="Klicka för att komma till kontakta oss">
                  <Link
                    to={question.link}
                    aria-label={`Länk till ${question.link}`}
                  >
                    Kontakta Oss
                  </Link>
                </Button>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
