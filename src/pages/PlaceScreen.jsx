import {Box, Button, Container, CssBaseline, Link, List, Toolbar, Typography,} from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";

import ListView from "../components/maps/ListView";
import { default as data } from "../assets/images/makers/murales.json";

const PlaceScreen = () => {
  return (
    <>
      <CssBaseline />
      <Toolbar>
        <Box
          sx={{
            height: 30,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography component="h1" variant="h6">
              Lugares del recorrido
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ color: blueGrey[700] }}
            >
              Paseo Literario Fray Antonio Alcalde
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <br />
      <hr />
      <List>
        <ListView places={data.places} />
      </List>
      <Container sx={{}}>
        <Link href={"app"}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            sx={{ my: 3 }}
          >
            Regresar
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default PlaceScreen;
