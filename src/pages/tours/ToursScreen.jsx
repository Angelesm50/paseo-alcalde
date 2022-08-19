import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";
import PanoramaIcon from "@mui/icons-material/Panorama";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import ProfilePicture from "../../assets/images/icons/background-profile.png";

const TOURS = [
  {
    title: "Murales",
    description: "Conoce los murales más emblematicos de la ciudad.",
    image: `${PanoramaIcon}`,
    icon: (
      <PanoramaIcon fontSize="large" sx={{ ml: 8, mt: 4, color: "#E57E93" }} />
    ),
    url: "murals",
  },
  {
    title: "Gastronomía",
    description: "Prueba las delicias culinarias de los arrededores.",
    image: `${RestaurantMenuIcon}`,
    icon: (
      <RestaurantMenuIcon
        fontSize="large"
        sx={{ ml: 8, mt: 4, color: "#E57E93" }}
      />
    ),
    url: "gastronomy",
  },
];

const ToursScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container component="main" sx={{ mt: 3 }}>
        <CssBaseline />
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          color="primary"
          sx={{ fontWeight: 500, textAlign: "center" }}
        >
          Recorridos
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          maxWidth="xs"
        >
          <Divider
            sx={{
              width: "7rem",
              borderTopWidth: "thick",
              borderTopColor: "#6197B2",
              borderBottomWidth: "inherit",
              borderRadius: 6,
              my: 2.2,
            }}
          />
          <RouteIcon fontSize="large" sx={{ mx: 1, color: "#6197B2" }} />
          <Divider
            sx={{
              width: "7rem",
              borderTopWidth: "thick",
              borderTopColor: "#6197B2",
              borderBottomWidth: "inherit",
              borderRadius: 6,
              my: 2.2,
            }}
          />
        </Box>
        <Grid container spacing={4}>
          {TOURS.map((card) => (
            <Grid item key={card.title} xs={12} sm={6}>
              <Card sx={{ mt: 4 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={ProfilePicture}
                  alt={card.title}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <IconButton sx={{ color: "#84AEC2" }} aria-label="item">
                      <ArrowForwardIosRoundedIcon
                        sx={{ stroke: "#84AEC2", strokeWidth: 2 }}
                        fontSize="small"
                      />
                    </IconButton>
                  </Box>
                  {/* <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          fullWidth
          variant="contained"
          size="large"
          color="primary"
          sx={{ my: 5, width: "200px" }}
          onClick={() => navigate("app")}
        >
          Regresar
        </Button>
      </Container>
    </>
  );
};

export default ToursScreen;
