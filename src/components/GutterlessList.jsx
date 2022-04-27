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
  },
  {
    primary: "Lugares del recorrido",
    secondary: "Paradas disponibles en el recorrido",
  },
  {
    primary: "Ajustes del recorrido",
    secondary: "Ajustes generales y del perfil",
  },
];

export default function GutterlessList() {
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
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
