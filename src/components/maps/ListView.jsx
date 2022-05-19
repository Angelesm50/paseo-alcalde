import {ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {Box} from "@mui/system";

import Dialog from '../Dialog';


const ListView = ({places}) => {
   return places.map((place, i) => (
      <div>
         <Box key={i}>
            <ListItem
               secondaryAction={
               <Dialog description={place.description} name={place.name} image={place.image}>
               </Dialog>}>
               <ListItemText
                  primary={`${place.name}`}
                  secondary={`${place["autor"]}`}
               />
            </ListItem>
            <Divider/>
         </Box>
      </div>
   ))
}


export default ListView;