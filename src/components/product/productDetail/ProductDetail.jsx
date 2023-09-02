import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";

ProductDetail.propTypes = {
  product: PropTypes.object,
};

function ProductDetail({ product }) {
  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1">Categoría: {product.category}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetail;
