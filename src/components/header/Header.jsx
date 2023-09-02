import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Button color="inherit" component={Link} to="/products">
          Productos
        </Button>
        <Button color="inherit" component={Link} to="/carts">
          Carrito
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
