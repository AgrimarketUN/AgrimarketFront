import * as React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import { NewProduct, categories } from "@/models";

export const ProductForm = () => {
  const [product, setProduct] = React.useState<NewProduct>({} as NewProduct);

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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setProduct((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(product);
  };

  return (
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
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
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
      <TextField
        label="Unidad de medida"
        name="unit"
        value={product.unit}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
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
        size="small"
        options={categories}
        renderInput={(params) => (
          <TextField name="Category" {...params} placeholder="" required />
        )}
      />
    </form>
  );
};
