import React from "react";
import { IconButton, Typography, Tooltip } from "@mui/material";
import Face6Icon from "@mui/icons-material/Face6";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";

function Navbar() {
  const secondarycolor = "#ffff";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const profileOpenClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const profileCloseClick = () => {
    setAnchorEl(null);
  };

  const [signInOpen, setSignInOpen] = React.useState(false);

  const signInOpenClick = () => {
    setSignInOpen(true);
  };
  const signInCloseClick = () => {
    setSignInOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink>
          <IconButton sx={{ color: secondarycolor, size: "large" }}>
            <Face6Icon></Face6Icon>
          </IconButton>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              ml: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: secondarycolor,
              textDecoration: "none",
            }}
          >
            THUKKA
          </Typography>
        </NavLink>
      </div>
      <div className="nav-middle">
        <NavLink to="/">
          <button className="btn-nav btn-home">
            <Tooltip title="Home">
              <IconButton sx={{ color: secondarycolor, size: "large" }}>
                <HomeIcon sx={{ fontSize: 27 }}></HomeIcon>
              </IconButton>
            </Tooltip>
          </button>
        </NavLink>
        <NavLink to="/marketplace">
          <button className="btn-nav btn-marketplace">
            <Tooltip title="Marketplace">
              <IconButton sx={{ color: secondarycolor, size: "large" }}>
                <StorefrontIcon sx={{ fontSize: 27 }}></StorefrontIcon>
              </IconButton>
            </Tooltip>
          </button>
        </NavLink>
        <NavLink to="/resources">
          <button className="btn-nav btn-resources">
            <Tooltip title="Resources">
              <IconButton sx={{ color: secondarycolor }}>
                <Inventory2Icon sx={{ fontSize: 25 }}></Inventory2Icon>
              </IconButton>
            </Tooltip>
          </button>
        </NavLink>
        <button className=" btn-search">
          <SearchIcon sx={{ color: secondarycolor, fontSize: 18 }}></SearchIcon>
        </button>
        <input className="nav-input" placeholder="Search"></input>
      </div>
      <div className="nav-right">
        <IconButton
          sx={{ color: secondarycolor }}
          id="profile-button"
          aria-controls={open ? "profile-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={profileOpenClick}
        >
          <AccountCircleIcon sx={{ fontSize: 35, mr: 2 }}></AccountCircleIcon>
        </IconButton>
        <Menu
          id="profile-menu"
          aria-labelledby="profile-button"
          anchorEl={anchorEl}
          open={open}
          onClose={profileCloseClick}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={profileCloseClick.Close}
            sx={{
              color: "#202329",

              fontSize: 15,
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={profileCloseClick.Close}
            sx={{
              color: "#202329",

              fontSize: 15,
            }}
          >
            My account
          </MenuItem>
          <MenuItem
            onClick={profileCloseClick.Close}
            sx={{
              color: "#202329",

              fontSize: 15,
            }}
          >
            Logout
          </MenuItem>
          <MenuItem
            onClick={() => {
              signInOpenClick();
              profileCloseClick();
            }}
            sx={{
              color: "#202329",

              fontSize: 15,
            }}
          >
            Login
          </MenuItem>
        </Menu>
        <SignIn open={signInOpen} onClose={signInCloseClick}></SignIn>
        <div className="vertical-div"></div>
        <Tooltip title="Add Product">
          <IconButton>
            <AddIcon sx={{ fontSize: 25, color: secondarycolor }}></AddIcon>
          </IconButton>
        </Tooltip>
      </div>
    </nav>
  );
}

export default Navbar;
