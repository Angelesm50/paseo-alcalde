import { ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

import Dialog from "../Dialog";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { firebaseApp } from "../../config/firebase";

const ListView = ({ places }) => {
  const storage = getStorage(firebaseApp);

  useEffect(() => {
    (async () => {
      try {
        await places.map(
          async (place) =>
            (place.url = await getDownloadURL(
              ref(storage, `fotos/${place.photo}`)
            ))
        );
      } catch (error) {
        toast.error(error?.message ?? "Something went wrong");
      }
    })();
  }, [places, storage]);

  return places.map((place, i) => (
    <div>
      <Box key={i}>
        <ListItem
          secondaryAction={
            <Dialog
              description={place.description}
              name={place.name}
              image={place.url}
            ></Dialog>
          }
        >
          <ListItemText
            primary={`${place.name}`}
            secondary={`${place.autor}`}
          />
        </ListItem>
        <Divider />
      </Box>
    </div>
  ));
};

export default ListView;
