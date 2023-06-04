import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/final" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
