import { useState } from "react";
import { Container, Typography, Button, Box, Divider } from "@mui/material";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, calculateTotal } = useCart();
  const [checkoutInProgress, setCheckoutInProgress] = useState(false);

  const total = calculateTotal();

  const handleCheckout = () => {
    // Set the state to display "Under Construction" message
    setCheckoutInProgress(true);
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
        }}
      >
        Your Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center">
          Your cart is empty
        </Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h5" color="primary">
              ${total.toFixed(2)}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </>
      )}

      {checkoutInProgress && (
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h4" color="textSecondary">
            Checkout Under Construction
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            We are working hard to bring this feature. Please check back later.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
