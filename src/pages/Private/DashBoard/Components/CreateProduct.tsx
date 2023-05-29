// FormDialog.tsx
import * as React from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NewProduct, categories, units } from "@/models";
import { createProduct } from "@/utils";

const CreateProduct: React.FC<{}> = () => {
  const [product, setProduct] = React.useState<NewProduct>({} as NewProduct);
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const categoryChange = (
    event: React.SyntheticEvent,
    value: { id: number; label: string } | null
  ) => {
    if (value) {
      setProduct((prev) => ({
        ...prev,
        categoryId: value.id,
      }));
    }
  };

  const unitChange = (event: React.SyntheticEvent, value: string | null) => {
    if (value) {
      setProduct((prev) => ({
        ...prev,
        unit: value,
      }));
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setProduct((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = () => {
    console.log(product);
    createProduct(product).then((res) => {
      console.log("respuesta create:", res);
    });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        <AddIcon style={{ fontSize: 60 }} />
      </Button>
      <Typography sx={{ fontSize: 10 }}>Agregar producto</Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear producto</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Descripción"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              multiline
            />
            <TextField
              label="Precio"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="number"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
                inputProps: { min: 0 },
              }}
            />
            <TextField
              label="Origen"
              name="origin"
              value={product.origin}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Fecha de caducidad"
              name="expiryDate"
              value={product.expiryDate}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="date"
            />
            <TextField
              label="Fecha de cosecha"
              name="harvestDate"
              value={product.harvestDate}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="date"
            />
            <TextField
              label="Cantidad disponible"
              name="availableQuantity"
              value={product.availableQuantity}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="number"
              required
            />
            <Autocomplete
              onChange={unitChange}
              sx={{ height: 50 }}
              id="categories-box"
              options={units}
              renderInput={(params) => (
                <TextField
                  label="Unidad"
                  name="unit"
                  {...params}
                  placeholder=""
                  required
                />
              )}
            />
            <TextField
              label="Peso (kg)"
              name="weight"
              value={product.weight}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Método de cultivo"
              name="cultivationMethod"
              value={product.cultivationMethod}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="organicCertifications"
                  checked={product.organicCertifications}
                  onChange={handleCheckboxChange}
                />
              }
              label="Certificaciones orgánicas"
            />
            <Autocomplete
              onChange={categoryChange}
              sx={{ height: 50 }}
              id="categories-box"
              options={categories}
              renderInput={(params) => (
                <TextField
                  label="Categoría"
                  name="Category"
                  {...params}
                  placeholder=""
                  required
                />
              )}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
