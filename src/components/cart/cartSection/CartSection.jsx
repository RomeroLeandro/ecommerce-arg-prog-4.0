import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";

CartsSection.propTypes = {
  customerId: PropTypes.number,
};
function CartsSection({ customerId }) {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (!customerId) {
      setCarts([]);
      return;
    }

    fetch(`https://fakestoreapi.com/carts/user/${customerId}`)
      .then((response) => response.json())
      .then((data) => setCarts(data))
      .catch((error) => console.error("Error fetching carts:", error));
  }, [customerId]);

  if (!customerId) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }}>
      {carts.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", margin: "2rem" }}
        >
          Este usuario no tiene productos agregados al carrito.
        </Typography>
      ) : (
        <TableContainer sx={{ margin: "2rem" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={centerCell}>Fecha</TableCell>
                <TableCell sx={centerCell}>Productos</TableCell>
                <TableCell sx={centerCell}>Cantidad total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carts.map((cart) => (
                <TableRow key={cart.id}>
                  <TableCell sx={centerCell}>
                    {new Date(cart.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell sx={centerCell}>
                    {cart.products.map((product) => (
                      <div key={product.productId}>
                        <Link
                          to={`/products/${product.productId}`}
                          color="inherit"
                        >
                          <Typography variant="body2">
                            ID: {product.productId}
                            {" - "}
                            Cantidad: {product.quantity}
                          </Typography>
                        </Link>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell sx={centerCell}>
                    {cart.products.reduce(
                      (total, product) => total + product.quantity,
                      0
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default CartsSection;

const centerCell = {
  textAlign: "center",
};
