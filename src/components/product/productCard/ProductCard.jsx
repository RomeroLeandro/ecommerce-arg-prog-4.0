import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

ProductCard.propTypes = {
  product: PropTypes.object,
};

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "420px",
        width: "250px",
        margin: "20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, objectFit: "contain", margin: "auto" }}
        image={product.image}
        alt={product.title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ marginBottom: "8px", textAlign: "center" }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
