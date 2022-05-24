import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const ABOUT_PASEO_ALCALDE = [
  {
    primary: "¿Qué es paseo Alcalde?",
    secondary: "Propósito e historia de la aplicación",
  },
  {
    primary: "Rutas del recorrido",
    secondary: "Paradas disponibles en el trayecto",
  },
  // {
  //   primary: "Ajustes del recorrido",
  //   secondary: "Ajustes generales y del perfil",
  // },
];

export default function GutterlessList() {
  return (
    <List sx={{ width: "100%" }}>
      {ABOUT_PASEO_ALCALDE.map((item, index) => (
        <Box key={index}>
          <ListItem
            disableGutters
            secondaryAction={
              <IconButton sx={{ color: "#b1d4cd" }} aria-label="item">
                <ArrowForwardIosRoundedIcon
                  sx={{ stroke: "#b1d4cd", strokeWidth: 2 }}
                  fontSize="small"
                />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${item.primary}`}
              secondary={`${item.secondary}`}
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
