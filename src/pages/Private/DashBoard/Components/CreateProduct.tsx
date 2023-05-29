// FormDialog.tsx
import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ProductForm } from "./ProductForm";

const CreateProduct: React.FC<{}> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        <AddIcon style={{ fontSize: 60 }} />
      </Button>
      <Typography sx={{ fontSize: 10 }}>Agregar producto</Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear producto</DialogTitle>
        <DialogContent>
          <ProductForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
