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

function HomePage() {
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null);

  const requestBluetoothDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: false,
        filters: [
          {
            // services: ["7fe51376-ab4a-4b16-915e-a2619c62e1b3"],
            namePrefix: "Hyosim",
          },
        ],
      });
      // const device = await navigator.bluetooth.requestDevice({
      //   acceptAllDevices: false,
      //   optionalServices: ["7fe51376-ab4a-4b16-915e-a2619c62e1b3"],
      // });
      setDevices([device]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const connectToDevice = async (device: BluetoothDevice) => {
    try {
      console.log(device);
      console.log(device.gatt);
      device.gatt?.device.gatt?.device.gatt?.device;
      const server = await device.gatt?.connect();
      console.log("connected:", server?.connected);
      setIsConnected(true);
      setConnectedDevice(device.name || "Unknown Device");
      console.log("Connected to", device.name);
    } catch (error) {
      console.log("Connection failed: ", error);
    }
  };

  return (
    <div className="main" flex-col="true">
      <Container>
        <Stack className="config" flexDirection={"column"}>
          <Box className="text">
            <Typography sx={{ fontSize: "42px" }}>
              Bluetooth Connection
            </Typography>
          </Box>
          {/* -------------BLUETOOTH----------------- */}
          <Stack flexDirection={"column"}>
            <Box sx={{ mt: "20px" }}>
              <Typography sx={{ fontSize: "24px" }}>
                <BluetoothSearchingIcon /> Bluetooth Devices
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: "10px" }}
                onClick={requestBluetoothDevice}>
                Scan for Bluetooth Devices
              </Button>
              <Box sx={{ mt: "20px" }}>
                {devices.map((device, index) => (
                  <Box key={index} sx={{ mb: "10px" }}>
                    <TextField
                      label="Bluetooth Device"
                      variant="outlined"
                      value={device.name || "Unknown Device"}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{ mt: "10px" }}
                      onClick={() => connectToDevice(device)}>
                      Connect
                    </Button>
                  </Box>
                ))}
              </Box>
              {isConnected && (
                <Alert severity="success" sx={{ mt: "20px" }}>
                  Connected to {connectedDevice}
                </Alert>
              )}
            </Box>

            {/* ---------------SSID---------------- */}
            <Box sx={{ mt: "50px" }}>
              <Typography sx={{ fontSize: "24px" }}>
                <WifiPasswordIcon /> SSID
              </Typography>
              <TextField
                id="outlined-basic"
                label="Input SSID"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Input Password"
                variant="outlined"
                fullWidth
                sx={{ mt: "20px" }}
              />
              <Button variant="contained" sx={{ mt: "10px" }}>
                Connect
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default HomePage;

// function HomePage() {
//   const [devices, setDevices] = useState<BluetoothDevice[]>([]);
//   const [isConnected, setIsConnected] = useState(false);
//   const [connectedDevice, setConnectedDevice] = useState<string | null>(null);

//   const requestBluetoothDevice = async () => {
//     try {
//       const device = await navigator.bluetooth.requestDevice({
//         acceptAllDevices: true,
//         optionalServices: ["battery_service"],
//       });
//       setDevices([device]);
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   const connectToDevice = async (device: BluetoothDevice) => {
//     try {
//       const server = await device.gatt.connect();
//       setIsConnected(true);
//       setConnectedDevice(device.name || "Unknown Device");
//       console.log("Connected to", device.name);
//     } catch (error) {
//       console.log("Connection failed: ", error);
//     }
//   };

//   return (
//     <div className="main" flex-col="true">
//       <Container>
//         <Stack className="config" flexDirection={"column"}>
//           <Box className="text">
//             <Typography sx={{ fontSize: "42px" }}>
//               Bluetooth Connection
//             </Typography>
//           </Box>
//           {/* -------------BLUETOOTH----------------- */}
//           <Stack flexDirection={"column"}>
//             <Box sx={{ mt: "20px" }}>
//               <Typography sx={{ fontSize: "24px" }}>
//                 <BluetoothSearchingIcon /> Bluetooth Devices
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{ mt: "10px" }}
//                 onClick={requestBluetoothDevice}>
//                 Scan for Bluetooth Devices
//               </Button>
//               <Box sx={{ mt: "20px" }}>
//                 {devices.map((device, index) => (
//                   <Box key={index} sx={{ mb: "10px" }}>
//                     <TextField
//                       label="Bluetooth Device"
//                       variant="outlined"
//                       value={device.name || "Unknown Device"}
//                       fullWidth
//                       InputProps={{
//                         readOnly: true,
//                       }}
//                     />
//                     <Button
//                       variant="contained"
//                       sx={{ mt: "10px" }}
//                       onClick={() => connectToDevice(device)}>
//                       검섹
//                     </Button>
//                   </Box>
//                 ))}
//               </Box>
//               {isConnected && (
//                 <Typography sx={{ mt: "20px", color: "green" }}>
//                   Connected to {connectedDevice}
//                 </Typography>
//               )}
//             </Box>

//             {/* ---------------SSID---------------- */}
//             <Box sx={{ mt: "50px" }}>
//               <Typography sx={{ fontSize: "24px" }}>
//                 <WifiPasswordIcon /> SSID
//               </Typography>
//               <TextField
//                 id="outlined-basic"
//                 label="Input SSID"
//                 variant="outlined"
//                 fullWidth
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Input Password"
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mt: "20px" }}
//               />
//               <Button variant="contained" sx={{ mt: "10px" }}>
//                 검섹
//               </Button>
//             </Box>
//           </Stack>
//         </Stack>
//       </Container>
//     </div>
//   );
// }

// export default HomePage;
