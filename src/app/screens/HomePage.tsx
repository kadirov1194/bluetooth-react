import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "../../css/home.css";
import BluetoothSearchingIcon from "@mui/icons-material/BluetoothSearching";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";

function HomePage() {
  return (
    <div className="main">
      <Container>
        <Stack className="config" flexDirection={"column"}>
          <Box className="text">
            <Typography sx={{ fontSize: "42px" }}>
              Bluetooth Connection
            </Typography>
          </Box>
          {/* -------------BLUETOOTH----------------- */}
          <Stack flexDirection={"column"}>
            <Box sx={{ mt: "100px", mr: "100px" }}>
              <Typography sx={{ fontSize: "24px" }}>
                <BluetoothSearchingIcon /> Bluetooth UUID
              </Typography>
              <FormControl sx={{ m: 2, width: "800px" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Input Bluetooth
                </InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Amount" />
              </FormControl>

              <Button variant="contained" sx={{ mt: "30px", ml: "10px" }}>
                검섹
              </Button>
            </Box>
            <Box sx={{ mt: "50px", mr: "100px" }}>
              <Typography sx={{ fontSize: "24px" }}>
                <WifiPasswordIcon /> WIFI ID
              </Typography>
              <FormControl sx={{ m: 2, width: "800px" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Input WIFI
                </InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Amount" />
              </FormControl>

              <Button variant="contained" sx={{ mt: "30px", ml: "10px" }}>
                검섹
              </Button>
            </Box>
          </Stack>
          {/* ---------------SSID---------------- */}
          <Stack flexDirection={"column"}>
            <Box sx={{ mt: "100px", mr: "100px" }}>
              <FormControl sx={{ m: 2, width: "800px" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Input SSID
                </InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Amount" />
              </FormControl>

              <FormControl sx={{ m: 2, width: "800px" }}>
                <InputLabel htmlFor="filled-adornment-password">
                  Input Password
                </InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Amount" />
              </FormControl>

              <Button variant="contained" sx={{ mt: "30px", ml: "10px" }}>
                검섹
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default HomePage;
