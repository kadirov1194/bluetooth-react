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
import React, { useState } from "react";
import "../../css/home.css";
import BluetoothSearchingIcon from "@mui/icons-material/BluetoothSearching";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function scanPage() {
  // const [devices, setDevices] = useState([]);
  // const [isConnected, setIsConnected] = useState(false);
  // const [connectedDevice, setConnectedDevice] = useState(null);

  // const requestBluetoothDevice = async () => {
  //   try {
  //     const device = await navigator.bluetooth.requestDevice({
  //       acceptAllDevices: true,
  //       optionalServices: ['battery_service'],
  //     });
  //     setDevices([device]);
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   }
  // };

  // const connectToDevice = async (device) => {
  //   try {
  //     const server = await device.gatt.connect();
  //     setIsConnected(true);
  //     setConnectedDevice(device.name);
  //     console.log('Connected to', device.name);
  //   } catch (error) {
  //     console.log('Connection failed: ', error);
  //   }
  // };

  return (
    <div className="main" flex-col>
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

              <TextField
                id="outlined-basic"
                label="Input Bluetooth"
                variant="outlined"
              />
              <Button variant="contained" sx={{ mt: "10px", ml: "10px" }}>
                검섹
              </Button>
            </Box>
            <Box sx={{ mt: "50px", mr: "100px" }}>
              <Typography sx={{ fontSize: "24px" }}>
                <WifiPasswordIcon /> WIFI ID
              </Typography>

              <TextField
                id="outlined-basic"
                label="Input WIFI"
                variant="outlined"
              />

              <Button variant="contained" sx={{ mt: "10px", ml: "10px" }}>
                검섹
              </Button>
            </Box>
          </Stack>
          {/* ---------------SSID---------------- */}
          <Stack flexDirection={"column"}>
            <Box sx={{ mt: "100px", mr: "100px" }}>
              <Typography sx={{ fontSize: "24px" }}>
                <WifiPasswordIcon /> SSID
              </Typography>
              <TextField
                id="outlined-basic"
                label="Input SSID"
                variant="outlined"
              />

              <Box sx={{ mt: "20px" }}>
                <TextField
                  id="outlined-basic"
                  label="Input Password"
                  variant="outlined"
                />

                <Button variant="contained" sx={{ mt: "10px", ml: "10px" }}>
                  검섹
                </Button>
              </Box>
            </Box>
          </Stack>

          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            sx={{ mt: "20px" }}>
            Connection SUCCESS
          </Alert>
        </Stack>
      </Container>
    </div>
  );
}

export default scanPage;
