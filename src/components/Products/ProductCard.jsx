import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Snackbar,
  Alert,
} from "@mui/material";
import PropTypes from "prop-types";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast(false);
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          height="240"
          image={product.image}
          title={product.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="caption" color="secondary">
            Category: {product.category}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      {/* Snackbar for Toast Notification */}
      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{ width: "100%" }}
        >
          {product.name} added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
