import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../../src/assets/images/logo/alcalde-white.png";

const MenuAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <img src={Logo} alt="Logo Alcalde" height="60" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
