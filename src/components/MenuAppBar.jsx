import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blueGrey } from "@mui/material/colors";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { logout } from "../services/actions/authAction";
import { clean } from "../services/actions/nominaAction";
import Logo from "../assets/images/logo/white/paseo-alcalde.png";
import { useNavigate } from "react-router-dom";

const MenuAppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clean());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
          >
            <img src={Logo} alt="Logo" width="30" height="30" />
          </Typography> */}
          <Box
            sx={{
              marginLeft: "auto",
              height: 30,
              width: 30,
            }}
            component="img"
            alt="Logo"
            src={Logo}
          />
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MoreVertIcon sx={{ color: blueGrey[50] }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={() => navigate("/my-profile")}>
                Mi perfil
              </MenuItem> */}
              {/* <MenuItem onClick={handleClose}>Ajustes</MenuItem> */}
              <MenuItem onClick={handleLogout}>Salir</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
