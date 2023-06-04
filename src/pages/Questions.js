import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useAxios from "../hooks/useAxios";
import { useDispatch } from "react-redux";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let apiUrl = `/api.php?amount=5`;

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAnwsers, setSelectedAnwsers] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answer = [...question.incorrect_answers];
      answer.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answer);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickNext = () => {
    const question = response.results[questionIndex];
    const correctAnswers = question.correct_answer;

    if (selectedAnwsers === correctAnswers) {
      setScore((prev) => prev + 1);
    }
    if (questionIndex + 1 === response?.results.length) {
      if (selectedAnwsers === correctAnswers) {
        dispatch(handleScoreChange(score + 1));
      } else {
        dispatch(handleScoreChange(score));
      }

      dispatch(handleAmountChange(response?.results.length));
      navigate("/final");
    } else {
      setSelectedAnwsers("");
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const handleClickAnswer = (e) => {
    setSelectedAnwsers(e.target.textContent);
  };

  return (
    <Box>
      <Typography variant="h5" mt={5}>
        Questions {questionIndex + 1}
      </Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button
            onClick={handleClickAnswer}
            variant="contained"
            fullWidth
            sx={{
              bgcolor: selectedAnwsers === decode(data) ? "green" : "white",
              color: "black",
            }}
          >
            {decode(data)}
          </Button>
        </Box>
      ))}

      <Box mt={5}>
        <Button
          onClick={handleClickNext}
          disabled={!selectedAnwsers}
          fullWidth
          variant="contained" color="error"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Questions;
