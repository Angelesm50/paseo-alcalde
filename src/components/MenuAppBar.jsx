import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../assets/images/logo/white/fray.png";

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
          <Box
            sx={{
              height: 40,
            }}
            component="img"
            alt="Logo"
            src={Logo}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
