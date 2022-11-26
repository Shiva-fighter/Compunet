import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  ListItem,
  ListItemText,
  IconButton,
  InputBase,
} from "@mui/material";
import PropTypes from "prop-types";
// import { Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material";
import dashboard from "./images/dashboard.png"
import AgentDashboard from "modules/private/AgentDashboard/AgentDashboard";

function AppHeader(props) {
  return (
    <Grid
    container
    spacing={2}
    item
    style={{
      background: "#FAFAFA",
    }}
  >
    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
      <img alt="Logo" src={dashboard} />
    </Grid>
    <Grid
      xs={7}
      sm={7}
      md={7}
      lg={7}
      xl={7}
      item
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "500px",
          backgroundColor: "#F2F2F2",
          borderRadius: "100px",
          height: "48px",
        }}
      >
        <IconButton disabled sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            "& ::placeholder": {
              color: "rgba(17, 35, 71, 0.41)",
            },
          }}
          placeholder="Search here"
          inputProps={{
            "aria-label": "Search here",
          }}
        />
      </Box>
    </Grid>
    <Grid
      xs={3}
      sm={3}
      md={3}
      lg={3}
      xl={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      gap={1}
    >
      <Typography
        sx={{
          backgroundColor: "#f4f4f4",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          borderRadius: 1,
          padding: "5px 10px",
        }}
      >
        <Typography>
          <Notifications htmlColor="#717171" />
        </Typography>
        <Typography fontWeight={700} color="#717171">
          0
        </Typography>
      </Typography>
      <Typography
        sx={{
          backgroundColor: "#717171",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          padding: "7px 10px",
        }}
      >
        <Typography fontWeight={700} color="#FFFFFF">
          KG
        </Typography>
      </Typography>
    </Grid>
  </Grid>
   <AgentDashboard />
);
}

AppHeader.propTypes = {};

export default AppHeader;
