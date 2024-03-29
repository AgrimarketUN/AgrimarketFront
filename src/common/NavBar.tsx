import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/states/userState";
import { clearFilters, setFilters } from "@/redux/states/filtersState";
import { useSelector } from "react-redux";
import { AppStore } from "@/models";
import { resetStore } from "@/redux/store";
import { EmptyShoppingCartState } from "@/redux/states/shoppingCartState";
import { getShoppingCart } from "@/utils";

const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const shoppingCart = useSelector((state: AppStore) => state.shoppingCart);
  const shoppingCartLength = Object.keys(shoppingCart).length;

  

  const [Search, setSearch] = React.useState<string>("");

  const [messages, setMessages] = React.useState<number>(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate("/dashboard");
    dispatcher(clearFilters());
    dispatcher(setFilters({ Search }));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    resetStore(dispatcher);
    sessionStorage.clear();
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleOrders = () => {
    navigate("/orders");
  };

  const handleLogo = () => {
    dispatcher(clearFilters());
    navigate("/dashboard");
  };

  useEffect(() => {
    if (shoppingCart === EmptyShoppingCartState){
      getShoppingCart(dispatcher);
    }
  }, [shoppingCart]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    > 
      <MenuItem onClick={handleProfile}>Perfil</MenuItem>
      <MenuItem onClick={handleOrders}>Ordenes</MenuItem>
      <MenuItem onClick={handleLogOut}>Cerrar sesión</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={handleLogo}
            style={{
              color: "white",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            AgriMarket
          </Button>
          <SearchDiv>
            <IconButton
              sx={{ color: "white" }}
              aria-label="Send-search"
              onClick={handleSearchSubmit}
            >
              <SearchIcon />
            </IconButton>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
            />
          </SearchDiv>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={messages} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate("/shoppingCart")}
            >
              <Badge badgeContent={shoppingCartLength} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default NavBar;
