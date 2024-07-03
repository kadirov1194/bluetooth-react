import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "../css/App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ mx: 4 }}>
          <Typography variant="h4" component={"h1"} gutterBottom>
            Bluetooth connection
          </Typography>
        </Box>
        <Button variant="contained">검섹</Button>
      </Stack>
    </Container>
  );
}

export default App;
