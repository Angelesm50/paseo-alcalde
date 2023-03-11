import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

import MenuAppBar from "../components/MenuAppBar";
import GutterlessList from "../components/GutterlessList";
import Jalisco from "../assets/images/places/jalisco-a-sus-hijos-esclarecidos.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 109, 129, 1) 0%, rgba(244, 244, 248, 0.2) 35%, rgba(244, 245, 248, 1) 100%), url(${Jalisco})`,
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
  const navigate = useNavigate();
  const transition = { duration: 0.5, ease: "easeInOut" };
  const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
  };
  return (
      <motion.div
          className="page"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={postVariants}
      >
      <Paper elevation={0} style={styles.paperContainer}>
        <CssBaseline />
        <MenuAppBar />
        <Container>
          <Container>
            <Button
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              style={{ marginTop: "25vh" }}
              sx={{ mb: 3 }}
              onClick={() => navigate("/map")}
            >recorrido
            </Button>
          </Container>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            mt={7}
            sx={{ color: blueGrey[800], fontWeight: 600 }}
          >
            Acerca de
          </Typography>
          <Divider />
          <GutterlessList />
        </Container>
      </Paper>
    </motion.div>
  );
};

export default AppScreen;
