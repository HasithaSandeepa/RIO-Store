import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useCart } from "../../context/CartContext";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    removeFromCart(item.id);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          mb: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          {/* Product Image */}
          <Grid item xs={12} sm={2}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                maxHeight: 100,
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              ${item.price.toFixed(2)} each
            </Typography>
          </Grid>

          {/* Quantity Control */}
          <Grid item xs={12} sm={3}>
            <ButtonGroup size="small">
              <IconButton
                color="primary"
                onClick={handleDecreaseQuantity}
                disabled={item.quantity <= 1}
              >
                <RemoveIcon />
              </IconButton>
              <Box
                sx={{
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography>{item.quantity}</Typography>
              </Box>
              <IconButton color="primary" onClick={handleIncreaseQuantity}>
                <AddIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>

          {/* Total Price */}
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle1">
              ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Grid>

          {/* Remove Button */}
          <Grid item xs={12} sm={1}>
            <IconButton color="secondary" onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="confirm-delete-dialog-title"
        aria-describedby="confirm-delete-dialog-description"
      >
        <DialogTitle id="confirm-delete-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-delete-dialog-description">
            Are you sure you want to remove <strong>{item.name}</strong> from
            your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
