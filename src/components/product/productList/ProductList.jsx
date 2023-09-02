import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import ProductCard from "../productCard/ProductCard";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

ProductsList.propTypes = {
  products: PropTypes.array,
};

function ProductsList({ products }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={styleText} variant="h3" gutterBottom>
        Productos
      </Typography>
      <Typography sx={styleText} variant="body1" paragraph>
        En esta sección, encontrarás una diversidad de productos que incluyen
        moda, tecnología, hogar, salud y más. Explora nuestra selección
        cuidadosamente curada para satisfacer tus necesidades y preferencias.
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsList;

const styleText = {
  textAlign: "center",
  margin: "2rem",
};
