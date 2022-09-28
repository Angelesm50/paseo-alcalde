import {
    useState,forwardRef
} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { default as data } from "../../assets/images/makers/murales.json";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogEditRute({places: propPlaces}) {
    const [open, setOpen] = useState(false);
    const [places, setPlaces] = useState(propPlaces);

    const handleClickOpen = () =>  setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCloseAndSave = () => {
        setOpen(false);
        let jsonString = JSON.stringify(places);
        localStorage.setItem("places", jsonString);
        window.location.reload(false);
    };

    const handleSetActive = (id) => {
        let copyPlaces = [...places];

        const placeChanged = copyPlaces.find(copyPlace => copyPlace.id === id);
        const indexPlace =  copyPlaces.indexOf(placeChanged);

        placeChanged.active = !placeChanged.active;
        copyPlaces[indexPlace] = placeChanged;
        setPlaces(copyPlaces);
    };

    return (
      <div>
          <Button variant="outlined" onClick={handleClickOpen}>
              Editar Ruta
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
              <AppBar sx={{ position: 'relative' }}>
                  <Toolbar>
                      <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                          Editar
                      </Typography>
                      <Button autoFocus color="inherit" onClick={handleCloseAndSave}>
                          Guardar
                      </Button>
                  </Toolbar>
              </AppBar>
              <List>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                      Seleccione los lugares
                  </Typography>
                  <div className="topping">
                      {places.map((place, i) => (
                          <>
                              <ListItem key={i}>
                                  <Switch type="checkbox"
                                          id={place.id}
                                          name={place.name}
                                          value={place.active}
                                          defaultChecked={place.active}
                                          onChange={() => handleSetActive(place.id)}
                                  />
                                  <label htmlFor={place.id}> {place.name}</label>
                              </ListItem>
                              <Divider variant="inset" component="li"  />
                          </>
                      ))}
                  </div>
              </List>
          </Dialog>
      </div>
    );
}
