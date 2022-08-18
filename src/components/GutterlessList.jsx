import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const ABOUT_PASEO_ALCALDE = [
  // {
  //   primary: "¿Qué es paseo Alcalde?",
  //   secondary: "Propósito e historia de la aplicación",
  //   url: "what",
  // },
  {
    primary: "Lugares del recorrido",
    secondary: "Paradas disponibles en el trayecto",
    url: "places",
  },
  // {
  //   primary: "Ajustes del recorrido",
  //   secondary: "Ajustes generales y del perfil",
  //   url: "configuration",
  // },
  // {
  //   primary: "Involucrados en el proyecto",
  //   secondary: "Equipo de trabajo",
  //   url: "configuration",
  // },
  // {
  //   primary: "Ajustes del recorrido",
  //   secondary: "Ajustes generales y del perfil",
  // },
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
            onClick={() => navigate(`/${item.url}`)}
          >
            <ListItemText
              primary={`${item.primary}`}
              secondary={`${item.secondary}`}
              onClick={() => navigate(`/${item.url}`)}
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
