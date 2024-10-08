import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", alignItems: 'center' }}>
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
