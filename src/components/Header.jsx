import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", alignItems: 'center' }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Link to="/" className="logo">
            Logo
          </Link>
          <div>
          <IconButton color="inherit" aria-label="cart" edge="end">
            <Link to="/wishlist">
              <FavoriteBorderIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" aria-label="cart" edge="end">
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}