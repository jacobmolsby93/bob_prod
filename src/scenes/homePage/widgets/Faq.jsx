import React, { useState } from "react";
import { Box, Typography, Fade } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

// JSON data with questions
import faqData from "../../../data/faqData.json";

export default function Faq(props) {
  // Handle question
  const [questions, setQuestions] = useState(faqData.questions);


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
        <Box key={question.id}>
          <Box
            className="row"
            display="flex"
            justifyContent="center"
            mt="10px"
            style={{ padding: `${props.smallScreen ? "0" : "0 20px"}`}}
            onClick={() => handleToggleAnswer(question.id)}
          >
            <Box
              className="col-12 question"
              sx={{
                backgroundColor: props.backgroundQuestion,
                ":hover": { cursor: "pointer" },
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              height="4rem"
              borderRadius="7.45px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Typography
                variant="h4"
                style={{ margin: "0", paddingLeft: "20px" }}
              >
                {question.question}
              </Typography>
              {!question.showAnswer ? (
                <Add sx={{ marginRight: "20px" }} />
              ) : (
                <Remove sx={{ marginRight: "20px" }} />
              )}
            </Box>
          </Box>
          {question.showAnswer && (
            <Fade in={question.showAnswer} timeout={300} unmountOnExit>
              <Box
                className="row"
                display="flex"
                justifyContent="center"
                mt="10px"
                style={{ padding: `${props.smallScreen ? "0" : "0 20px"}`}}
              >
                <Box
                  className="col-12 answer"
                  sx={{ backgroundColor: props.backgroundQuestion }}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  height="4rem"
                  borderRadius="7.45px"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Typography
                    variant="h4"
                    style={{ margin: "0", paddingLeft: "20px" }}
                  >
                    {question.answer}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      ))}
    </>
  );
}
