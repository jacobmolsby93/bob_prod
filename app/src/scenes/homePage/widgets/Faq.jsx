import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  List,
  ListItem,
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
    padding: 0,
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&>a": {
      padding: "6px 16px",
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
        <Box key={question.id} sx={{ marginBottom: "1.2rem" }}>
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
                style={{ margin: "0", padding: "1rem 1.8rem", fontWeight: "700", fontSize: "1.4rem" }}
              >
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="col-12" paddingLeft="20px">
                <Typography variant="body1" style={{ margin: "0 1rem", fontSize: "1.2rem" }}>
                  {question.answer}
                </Typography>
                {question.answerList && (
                  <>
                  <Typography variant="body1" style={{ margin: "0 1rem 1rem 1rem", fontSize: "1.3rem" }}>
                    {question.answerList.title}
                  </Typography>
                  <ul>
                    <li>
                    <Typography variant="body1" style={{ margin: "0 1rem", fontSize: "1.3rem" }}>
                    {question.answerList.list1}
                  </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" style={{ margin: "0 1rem", fontSize: "1.3rem" }}>
                    {question.answerList.list2}
                  </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" style={{ margin: "0 1rem", fontSize: "1.3rem" }}>
                    {question.answerList.list3}
                  </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" style={{ margin: "0 1rem", fontSize: "1.3rem" }}>
                    {question.answerList.list4}
                  </Typography>
                    </li>
                  </ul>
                  <Typography variant="body1" style={{ margin: "0 1rem", fontSize: "1.3rem" }}>
                    {question.answerList.body}
                  </Typography>
                  </>
                )}
              </Box>
              {question.link && (
                <Box padding="1rem">
                  <Button
                    variant="contained"
                    sx={buttonStyleContained}
                    aria-label="Klicka för att komma till kontakta oss"
                  >
                    <Link
                      to={question.link}
                      aria-label={`Länk till ${question.link}`}
                      style={{ fontSize: "1rem", fontWeight: "800"}}
                    >
                      Kontakta Oss
                    </Link>
                  </Button>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
