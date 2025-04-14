import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
} from '@mui/material';

const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    alert('Payment Successful! Thank you for your order.');
    // You can redirect or clear cart here
  };

  return (
    <Box p={4}>
      <Paper elevation={4} sx={{ maxWidth: 700, margin: 'auto', p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
          Payment Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={paymentInfo.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              value={paymentInfo.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              value={paymentInfo.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
            <Typography variant="h6" mt={2} mb={1}>
              Card Details
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Card Number"
              name="cardNumber"
              fullWidth
              value={paymentInfo.cardNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Expiry Date"
              name="expiryDate"
              placeholder="MM/YY"
              fullWidth
              value={paymentInfo.expiryDate}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="CVV"
              name="cvv"
              type="password"
              fullWidth
              value={paymentInfo.cvv}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handlePayment}
              sx={{ fontWeight: 'bold', py: 1.5 }}
            >
              Confirm Payment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Payment;
