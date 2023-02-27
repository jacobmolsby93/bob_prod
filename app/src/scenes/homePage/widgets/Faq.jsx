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
import ButtonOrange from "../../../components/ButtonOrange";

export default function Faq(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // Handle question
  const [questions, setQuestions] = useState(faqData.questions);
  const [activeQuestion, setActiveQuestion] = useState(0);

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
      {questions.map((question, index) => (
        <Box key={question.id}>
          <Accordion
            sx={{
              boxShadow: "none",
              borderTop: "1px solid rgba(0, 0, 0, 0.15)",
              borderBottom:
                index === questions.length - 1
                  ? "1px solid rgba(0, 0, 0, 0.15)"
                  : "0",
              borderRadius: "0 !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`question-${question.id}-content`}
              id={`question-${question.id}-header`}
              onClick={() => handleToggleAnswer(question.id)}
              title="Klicka för att se svar"
            >
              <Typography
                variant="h5"
                component="h3"
                style={{
                  margin: "0",
                  padding: !smallScreen ? "1rem 1.8rem" : "0.5rem",
                  fontWeight: "700",
                  fontSize: !smallScreen ? "1.4rem" : "1.2rem",
                }}
              >
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="col-12" sx={{paddingLeft: !smallScreen ? "20px" : "0"}}>
                <Typography
                  variant="body1"
                  style={{ margin: "0 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                >
                  {question.answer}
                </Typography>
                {question.answerList && (
                  <>
                    <Typography
                      variant="body1"
                      style={{ margin: "0 1rem 1rem 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                    >
                      {question.answerList.title}
                    </Typography>
                    <ul>
                      <li>
                        <Typography
                          variant="body1"
                          style={{ margin: "0 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                        >
                          {question.answerList.list1}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          style={{ margin: "0 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                        >
                          {question.answerList.list2}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          style={{ margin: "0 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                        >
                          {question.answerList.list3}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          style={{ margin: "0 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                        >
                          {question.answerList.list4}
                        </Typography>
                      </li>
                    </ul>
                    <Typography
                      variant="body1"
                      style={{ margin: "0 1rem", fontSize: !smallScreen ? "1.2rem" : "1rem" }}
                    >
                      {question.answerList.body}
                    </Typography>
                  </>
                )}
              </Box>
              {question.link && (
                <Box padding="1rem">
                  <ButtonOrange href={question.link} aria={`Länk till ${question.link}`} ariaAtag="Klicka för att komma till kontakta oss" buttonText="Kontakta Oss"/>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
