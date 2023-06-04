import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImgCongratulation from "../Assets/congratulation.png";
import ImgCompleted from "../Assets/completed.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FinalModule = () => {
  const { amount_of_question, score } = useSelector((state) => state);
  const navigate = useNavigate();
  const handleBackToQuesTions = () => {
    navigate("/questions");
  };

  return (
    <Card width="100vw">
      <CardMedia
        component="img"
        alt=""
        width="250px"
        height="200px"
        sx={{
          objectFit: "contain",
        }}
        image={score > 3 ? ImgCongratulation : ImgCompleted}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" fontWeight="bold" component="div">
          {score > 3 ? "Congratulation!!" : "Completed!!"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {score > 3 ? "You are amazing!!" : "Better luck next time!"}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={5}>
          {score} / {amount_of_question} conrect answers
        </Typography>
        <Button onClick={handleBackToQuesTions} variant="outlined">
          Play Again!
        </Button>
      </CardContent>
    </Card>
  );
};

export default FinalModule;
