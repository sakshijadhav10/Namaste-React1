// import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate=useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            {/* <MenuIcon /> */}
            <img
              style={{ height: 40 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqNoL-tXY9K8Cd0jP9ZQrBMp6xlTuFsjDQA&s"
              alt=""
            />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // height:'100vh',
              gap: 3,
              padding: 2,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <NavLink to={"/"}>
              <Typography variant="h6" component="div">
                Home
              </Typography>
            </NavLink>
            <NavLink to={"/about"}>
              {" "}
              <Typography variant="h6" component="div">
                About
              </Typography>
            </NavLink>
            <NavLink to={"/products"}>
              <Typography variant="h6" component="div">
                Products
              </Typography>
            </NavLink>
            <NavLink to={"/contact/sakshi/jadhav"}>
              <Typography variant="h6" component="div">
                Contact Us
              </Typography>
            </NavLink>
            <NavLink to={"/jobs"}>
              <Typography variant="h6" component="div">
                Jobs
              </Typography>
            </NavLink>
            <NavLink to={"/filter"}>
              <Typography variant="h6" component="div">
                Filter
              </Typography>
            </NavLink>
          </Box>

          <Button onClick={()=>navigate('/about',{replace:true})} variant="contained">
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
