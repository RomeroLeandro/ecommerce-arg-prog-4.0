import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/product/productDetail/ProductDetail";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return (
      <Container maxWidth="md" >
        <Typography sx={styleText} variant="h4" gutterBottom>
          Cargando...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography sx={styleText} variant="h4" gutterBottom>
        Detalle del Producto
      </Typography>
      <ProductDetail product={product} />
    </Container>
  );
}

export default ProductPage;

const styleText = {
  textAlign: "center",
  margin: "2rem",
};
