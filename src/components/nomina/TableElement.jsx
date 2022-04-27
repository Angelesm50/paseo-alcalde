import React from "react";
import { useDispatch } from "react-redux";

import format from "date-fns/format";

import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import { deleteNominaOnDB } from "../../actions/nominaAction";

const TableElement = ({ element }) => {
  const dispatch = useDispatch();
  let formattedDate = element.date;

  if (element.date.seconds) {
    formattedDate = format(element.date.toDate(), "yyyy/MM/dd");
  }
  const handleDelete = () => {
    dispatch(deleteNominaOnDB(element.id));
  };
  return (
    <>
      <TableCell component="th" scope="row">
        {formattedDate}
      </TableCell>
      <TableCell align="right">{element.payment}</TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleDelete}
        >
          Borrar
        </Button>
      </TableCell>
    </>
  );
};

export default TableElement;
