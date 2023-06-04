import { Box, Button } from "@mui/material";
import React from "react";
import ImgHome from "../Assets/home.png";
import { Link } from "react-router-dom";
import TitleField from "../components/TitleField";

const Home = () => {
  return (
    <Box>
      <TitleField title="Quiz App!" />
      <img src={ImgHome} alt="ImgHome" height="500" />
      <Button variant="contained">
        <Link to="/questions" style={{ textDecoration: "none", color: "#fff" }}>
          Start Quiz!
        </Link>
      </Button>
    </Box>
  );
};

export default Home;
