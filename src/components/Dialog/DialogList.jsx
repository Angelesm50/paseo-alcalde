import {useState, useEffect, useRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import IconButton from "@mui/material/IconButton";

export default function ScrollDialog({place}) {
   const [open, setOpen] = useState(false);
   const descriptionElementRef = useRef(null);

   const handleClickOpen = () => () => setOpen(true);
   const handleClose = () => setOpen(false);

   useEffect(() => {
      if (!open) {
         return;
      }

      const { current: descriptionElement } = descriptionElementRef;

      if (descriptionElement === null) {
         return;
      }

      descriptionElement.focus();
   }, [open]);

   return (
      <div>
         <IconButton aria-label="comment" onClick={handleClickOpen('paper')}>
            <MenuOpenIcon/>
         </IconButton>
         <Dialog
            open={open}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
         >
            <DialogTitle id="scroll-dialog-title">{place.name}</DialogTitle>
            <DialogContent dividers={true}>
               <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                  <img src={place.url} alt={place.name} style={{width: "100%", height: "100%"}}/>
                  {place.description}
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button
                  fullWidth
                  onClick={handleClose}
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ marginTop: "2vh" }}
                  sx={{ mb: 3 }}
               >
                  Regresar
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
