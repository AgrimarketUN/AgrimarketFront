import "./App.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import { Snackbar } from "@mui/material";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
