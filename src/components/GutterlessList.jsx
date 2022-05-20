import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const ABOUT_PASEO_ALCALDE = [
  {
    primary: "¿Qué es paseo Alcalde?",
    secondary: "Propósito e historia de la aplicación",
    url: "what",
  },
  {
    primary: "Rutas del trayecto",
    secondary: "Paradas disponibles en el recorrido",
    url: "places",
  },
  {
    primary: "Ajustes del recorrido",
    secondary: "Ajustes generales y del perfil",
    url: "configuration",
  },
  {
    primary: "Involucrados en el proyecto",
    secondary: "Equipo de trabajo",
    url: "configuration",
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
              <IconButton aria-label="comment">
                <ArrowForwardIosIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${item.primary}`}
              secondary={`${item.secondary}`}
              onClick={() => navigate(`${item.url}`)}
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
