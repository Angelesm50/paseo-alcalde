import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ProfilePicture from "../../assets/images/icons/background-profile.png";

const TEAM = [
  {
    name: "Fernando Rodríguez Cardona",
  },
  {
    name: "José Roberto Lomelí Huerta",
  },
  {
    name: "Leonardo Uriel Ulloa Mora",
  },
  {
    name: "Lorena Itzel Orozco Maciel",
  },
  {
    name: "María de los Ángeles Martínez Vargas",
  },
  {
    name: "Rodolfo Omar Domínguez García ",
  },
  {
    name: "Yehoshua Aguilar Molina",
  },
  {
    name: "Christian Medina Cruz",
  },
];

const TeamScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container component="main" sx={{ mt: 3 }}>
        <CssBaseline />
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          sx={{ fontWeight: 600, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            gutterBottom
            component="span"
            color="primary"
            sx={{ fontWeight: 500 }}
          >
            Involucrados
          </Typography>{" "}
          en el proyecto
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
          maxWidth="xs"
        >
          <Divider
            sx={{
              width: "7rem",
              fontWeight: 500,
              borderTopWidth: "thick",
              borderTopColor: "#6197B2",
              borderRadius: 6,
              my: 2.2,
            }}
          />
          <FavoriteIcon fontSize="large" sx={{ mx: 1, color: "#6197B2" }} />
          <Divider
            sx={{
              width: "7rem",
              fontWeight: 500,
              borderTopWidth: "thick",
              borderTopColor: "#6197B2",
              borderRadius: 6,
              my: 2.2,
            }}
          />
        </Box>
        <Grid container spacing={4}>
          {TEAM.map((card) => (
            <Grid item key={card.name} xs={12} sm={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#dee2e6",
                    borderRadius: "50%",
                    p: "0.25rem",
                    mt: 3,
                    boxShadow: `0 .125rem .25rem rgba(0,0,0,.075)!important`,
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={ProfilePicture}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 500, mt: 2 }}
                  >
                    {card.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mb: 3 }}>
                  <FacebookIcon sx={{ color: "#6197B2", mx: 1 }} />
                  <InstagramIcon sx={{ color: "#6197B2", mx: 1 }} />
                  <LinkedInIcon sx={{ color: "#6197B2", mx: 1 }} />
                </CardActions>
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

export default TeamScreen;
