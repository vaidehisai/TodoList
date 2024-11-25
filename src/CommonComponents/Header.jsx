import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Notifications, AccountCircle, Settings } from "@mui/icons-material";


import Popover from "@mui/material/Popover";

const Header = (props) => {

   
  const [anchorEl, setAnchorEl] = useState("");
  const [userData,setUserData]=useState({})
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCreatePop=(event)=>{
    setAnchorEl(event.currentTarget);

  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;




  const handleLogout = () => {
    // logOut();
    props.Redirectpath("/");
  };
  const handlePath = () => {
    props.Redirectpath("/dashboard/createUser");
  };
  React.useEffect(() => {
    const storedUser = localStorage.getItem("RegisteredUser");
    const user = JSON.parse(storedUser);
    setUserData(user)
 
  }, []);

  return (
    <AppBar position="fixed" color="inherit" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - Title */}
        <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
         
        </Typography>

        {/* Middle - Tabs */}
      

        {/* Right Side - Icons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <div>
            <AccountCircle />
            </div> */}
          <div>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  Name:
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#34495e",
                    textAlign: "right",
                  }}
                >
           {userData&&userData.fullName}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#2c3e50" }}>
                  Email:
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#34495e",
                    textAlign: "right",
                  }}
                >
                  {userData&&userData.email}
                </span>
              </div>
            </div>
          </div>

          <IconButton color="inherit">
            {/* <Notifications color="error" />{" "} */}
            {/* Add a color prop to make it red */}
          </IconButton>

          <IconButton color="inherit">
            <Settings onClick={handleCreatePop} />
          </IconButton>
          {
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography onClick={handlePath} sx={{ p: 1 }}>Create User</Typography>
          </Popover>
          }
          <IconButton color="inherit" onClick={handleLogout}>
            {/* <img src={LogOutIcon} /> */}logout
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
