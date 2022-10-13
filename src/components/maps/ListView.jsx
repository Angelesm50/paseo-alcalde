import {ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {Box} from "@mui/system";
import ScrollDialog from "../Dialog/DialogList";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {firebaseApp} from "../../config/firebase";
import {useEffect} from "react";

const ListView = ({places}) => {
   const storage = getStorage(firebaseApp);

   useEffect(() => {
      (async () => {
         try {
            await places.map(
               async (place) =>
                  place.url = await getDownloadURL(
                     ref(storage, `fotos/${place.photo}`)
                  ));
         } catch (error) {
            // toast.error(error?.message ?? "Something went wrong");
         }
      })();
   }, [storage,places]);
   return places.map((place, i) => (
      <div key={i}>
         <Box>
            <ListItem
               key={i}
               secondaryAction={
                  <ScrollDialog place={place}>
                  </ScrollDialog>}>
               <ListItemText
                  primary={`${place.name}`}
                  secondary={`${place.autor}`}
               />
            </ListItem>
            <Divider/>
         </Box>
      </div>
   ))
}


export default ListView;