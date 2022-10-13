import {useState,forwardRef} from 'react';

import {
    Button, Dialog, ListItem, List, AppBar, Toolbar, Typography, Slide, Switch, Divider
} from '@mui/material';

import {EditLocation} from '@mui/icons-material/';




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
          <Button variant="contained" endIcon={<EditLocation/>} onClick={handleClickOpen}>
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
                      <Button variant="outlined" color="inherit" onClick={handleCloseAndSave}>
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
