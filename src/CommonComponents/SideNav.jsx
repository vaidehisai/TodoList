import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { useMediaQuery } from "@mui/material";

const mdTheme = createTheme({
  palette: {
    background: {
      default: "#F4F7FE",
    },
    backgroundColor: "#F4F7FE",
  },
});

export default function SideNavBar(props) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#F4F7FE",
        }}
      >
        <Header Redirectpath={props.Redirectpath} />
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            backgroundColor: "#F5F8FF",
            paddingTop: "64px",
            scrollbarWidth: "none", // Firefox
            "-ms-overflow-style": "none", // IE and Edge
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, WebKit
            },
          }}
        >
          <div style={{ padding: "10px 0px" }}>
            <Outlet />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
