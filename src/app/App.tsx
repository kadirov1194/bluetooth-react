import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "../css/App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

export default App;
