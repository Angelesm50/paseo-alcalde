import { useSelector } from "react-redux";

import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import MenuAppBar from "../components/MenuAppBar";
// import FormAdd from "../components/nomina/FormAdd";
// import TableNomina from "../components/nomina/TableNomina";

import Catedral from "../assets/catedral/catedral-gdl.jpg";
import { blueGrey } from "@mui/material/colors";
import GutterlessList from "../components/GutterlessList";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(31, 40, 69, 0.52), rgba(231, 230, 234, 0.73)), url(${Catedral})`,
    width: "100%",
    height: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    backgroundColor: "#cccccc",
    backgroundPosition: "center",
  },
};

const AppScreen = () => {
  const displayName = useSelector((state) => state.auth.displayName);
  // const nominaData = useSelector((state) => state.nomina.data);

  return (
    <>
      <Paper elevation={0} style={styles.paperContainer}>
        <CssBaseline />
        <MenuAppBar />
        <Container>
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              mt={2}
              sx={{ color: blueGrey[50] }}
            >
              {displayName}
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: blueGrey[50] }} />
          <Container maxWidth="xs">
            <Button
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              style={{ marginTop: "25vh" }}
              sx={{ mb: 3 }}
            >
              Iniciar recorrido
            </Button>
          </Container>
          {/* <FormAdd />
          <TableNomina data={nominaData} /> */}
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            mt={2}
            sx={{ color: blueGrey[400] }}
          >
            Acerca de
          </Typography>
          <Divider />
          <GutterlessList />
        </Container>
      </Paper>
    </>
  );
};

export default AppScreen;
