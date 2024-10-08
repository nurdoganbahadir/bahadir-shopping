import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { basket } = useSelector((state) => state.basketReducer);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#00897b" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
            to="/"
          >
            Bahadir Shopping
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => navigate("/sepetim")}
          >
            <LocalGroceryStoreIcon />
            {basket.length}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
