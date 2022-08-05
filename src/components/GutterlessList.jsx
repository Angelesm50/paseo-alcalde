import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ABOUT_PASEO_ALCALDE = [
  {
    primary: "¿Qué es paseo Alcalde?",
    secondary: "Propósito e historia de la aplicación",
    url: "about",
  },
  {
    primary: "Recorridos",
    secondary: "Paradas disponibles en el trayecto",
    url: "tours",
  },
  {
    primary: "Ajustes",
    secondary: "Ajustes generales y de perfil",
    url: "settings",
  },
  {
    primary: "Involucrados en el proyecto",
    secondary: "Equipo de trabajo",
    url: "Involved-in-the-project",
  },
];

export default function GutterlessList() {
  const navigate = useNavigate();
  return (
    <List sx={{ width: "100%" }}>
      {ABOUT_PASEO_ALCALDE.map((item, index) => (
        <Box key={index}>
          <ListItem
            disableGutters
            secondaryAction={
              <IconButton sx={{ color: "#84AEC2" }} aria-label="item">
                <ArrowForwardIosRoundedIcon
                  sx={{ stroke: "#84AEC2", strokeWidth: 2 }}
                  fontSize="small"
                />
              </IconButton>
            }
          >
            <ListItemText
              primary={
                <Typography
                  type="h6"
                  style={{ color: "#202946" }}
                  sx={{ fontWeight: 600 }}
                >
                  {item.primary}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  component="span"
                  color="#757575"
                  sx={{ fontWeight: 500 }}
                >
                  {item.secondary}
                </Typography>
              }
              onClick={() => navigate(`/${item.url}`)}
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
