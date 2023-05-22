import { ProductsFilters, categories, orderBy } from "@/models";
import {
  Autocomplete,
  Button,
  Card,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  EmptyFiltersState,
  clearFilters,
  setFilters as setFiltersStore,
} from "@/redux/states/filtersState";
import { fetchProducts } from "../Utils/fetchProducts";
import { Stack } from "@mui/system";

interface FiltterCardProps {}

const FiltersCard: React.FC<FiltterCardProps> = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<ProductsFilters>({
    Organic: false,
  });

  const handleOrganic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      Organic: event.target.checked,
    }));
  };

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: any,
    name: string
  ) => {
    if (name === "Category" || name === "OrderBy") {
      newValue = newValue.id;
    } else if (name === "PriceMin" || name === "PriceMax") {
      newValue = Number(newValue);
    }
    setFilters((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const submitFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setFiltersStore(filters));
  };

  const clearAllFilters = () => {
    dispatch(clearFilters());
    fetchProducts(EmptyFiltersState);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <form onSubmit={submitFilters}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <div>
          <Typography
            sx={{ fontSize: 14 }}
            component="div"
            align="left"
            fontWeight="bold"
          >
            Ordenar por
          </Typography>
          <Autocomplete
            onChange={(event, newValue) =>
              handleChange(event, newValue, "OrderBy")
            }
            sx={{ height: 50 }}
            id="categories-box"
            size="small"
            options={orderBy}
            renderInput={(params) => (
              <TextField {...params} placeholder="Todas" />
            )}
          />
          </div>
          <div>
          <Typography
            sx={{ fontSize: 14 }}
            component="div"
            align="left"
            fontWeight="bold"
          >
            Categoría
          </Typography>
          <Autocomplete
            onChange={(event, newValue) =>
              handleChange(event, newValue, "Category")
            }
            sx={{ height: 50 }}
            id="categories-box"
            size="small"
            options={categories}
            renderInput={(params) => (
              <TextField name="Category" {...params} placeholder="Todas" />
            )}
          />
          </div>
          <div>
          <Typography
            sx={{ fontSize: 14 }}
            component="div"
            align="left"
            fontWeight="bold"
          >
            Certificación orgánica
          </Typography>
          <Switch
            onChange={handleOrganic}
            checked={filters.Organic}
            name="Organic"
            inputProps={{ "aria-label": "controlled" }}
          />
          </div>
          <div>
          <Typography
            sx={{ fontSize: 14 }}
            component="div"
            align="left"
            fontWeight="bold"
          >
            Precio
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="price-min">Mínimo</InputLabel>
            <Input
              onChange={(event) =>
                handleChange(event, event.target.value, "PriceMin")
              }
              name="PriceMin"
              id="PriceMin"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="price-max">Máximo</InputLabel>
            <Input
              onChange={(event) =>
                handleChange(event, event.target.value, "PriceMax")
              }
              name="PriceMax"
              id="price-max"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          </div>
          <Button variant="contained" size="small" type="submit">
            Filtrar
          </Button>
          <Button
            onClick={clearAllFilters}
            style={{
              padding: 5,
              fontSize: 11,
              color: "black",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            Limpiar filtros
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default FiltersCard;
