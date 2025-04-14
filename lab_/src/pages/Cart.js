import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Slide
} from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice, getTotalItems } = useContext(CartContext);
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    setShowPlaceOrder(true);
  };

  const handlePlaceOrder = () => {
    navigate('/payment');
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.price.replace('$', '')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total: ${(item.price.replace('$', '') * item.quantity).toFixed(2)}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      sx={{ mt: 2 }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Total Summary and Checkout Button */}
          <Box textAlign="right" mt={4}>
            <Typography variant="h6">
              Total Items: <strong>{getTotalItems()}</strong>
            </Typography>
            <Typography variant="h6" mb={2}>
              Total Amount: <strong>${getTotalPrice()}</strong>
            </Typography>

            {/* Proceed to Checkout (Trolley) */}
            {!showPlaceOrder && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckoutClick}
                sx={{ borderRadius: 2 }}
              >
                Proceed to Checkout 🛒
              </Button>
            )}

            {/* Place Order Button Slide-In */}
            <Slide direction="up" in={showPlaceOrder} mountOnEnter unmountOnExit>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handlePlaceOrder}
                  sx={{ borderRadius: 2 }}
                >
                  Place Order
                </Button>
              </Box>
            </Slide>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;




