import { useDispatch } from "react-redux";

import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";

import { createNomina } from "../../actions/nominaAction";
import { useState } from "react";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState({
    paymentHour: 0,
    hours: 0,
  });

  const handleAddNomina = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setPaymentAmount({
      ...paymentAmount,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const totalAmount = paymentAmount.paymentHour * paymentAmount.hours;
    dispatch(createNomina(totalAmount));
    setPaymentAmount({ paymentHour: 0, hours: 0 });
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        size="large"
        color="info"
        sx={{ mt: 3, mb: 5 }}
        onClick={handleAddNomina}
      >
        Nuevo
      </Button>
      {viewForm && (
        <Box component="div" sx={{ mt: 1 }}>
          <FormControl fullWidth margin="normal" variant="standard">
            <InputLabel htmlFor="paymentHour">Pago por hora</InputLabel>
            <Input
              type="number"
              id="paymentHour"
              name="paymentHour"
              value={paymentAmount.paymentHour}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="standard">
            <InputLabel htmlFor="hours">Cantidad de horas</InputLabel>
            <Input
              type="number"
              id="hours"
              name="hours"
              value={paymentAmount.hours}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="success"
            sx={{ mt: 3, mb: 5 }}
            onClick={handleSave}
          >
            Guardar
          </Button>
        </Box>
      )}
    </>
  );
};

export default FormAdd;
