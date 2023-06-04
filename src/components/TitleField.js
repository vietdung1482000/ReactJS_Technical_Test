import { Typography } from "@mui/material";
import React from "react";

const TitleField = ({ title }) => {
  return (
    <Typography variant="h2" fontWeight="bold">
      {title}
    </Typography>
  );
};

export default TitleField;
