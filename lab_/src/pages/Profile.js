import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, Button, Grid, Paper } from '@mui/material';
import AnimatedCard from '../components/AnimatedCard';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    age: 30,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    orders: [
      { orderId: 'ORD12345', date: '2025-04-01', paymentMode: 'Credit Card', amount: '₹1,500', status: 'Delivered' },
      { orderId: 'ORD12346', date: '2025-04-05', paymentMode: 'PayPal', amount: '₹2,000', status: 'Canceled' },
    ],
    refunds: [
      { refundId: 'RF123', reason: 'Damaged Item', amount: '₹500', date: '2025-04-07' },
    ]
  });

  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
    setShowProfileDetails(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Profile</Typography>

      <Box display="flex" alignItems="center" gap={3} mb={3}>
        <Avatar sx={{ width: 80, height: 80 }} src={formData.photo} />
        <Box>
          <Typography variant="h6">{formData.name}</Typography>
          <Typography variant="body2">{formData.email}</Typography>
          <Typography variant="body2">{formData.phone}</Typography>
          <Typography variant="body2">{formData.address}</Typography>
        </Box>
      </Box>

      {/* Editable Form */}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" name="email" value={formData.email} onChange={handleInputChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone" name="phone" value={formData.phone} onChange={handleInputChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address" name="address" value={formData.address} onChange={handleInputChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ marginBottom: 16 }} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>Save Changes</Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        // Show card only when not editing or showing details
        !showProfileDetails && (
          <AnimatedCard
            title="Profile Details"
            content="Click to view complete profile details"
            onClick={() => setShowProfileDetails(true)}
          />
        )
      )}

      {/* Profile Details Section */}
      {showProfileDetails && !isEditing && (
        <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" gutterBottom>Full Profile Details</Typography>
          <Typography><strong>Name:</strong> {profile.name}</Typography>
          <Typography><strong>Email:</strong> {profile.email}</Typography>
          <Typography><strong>Phone:</strong> {profile.phone}</Typography>
          <Typography><strong>Address:</strong> {profile.address}</Typography>
          <Typography><strong>Age:</strong> {profile.age}</Typography>

          {/* Orders */}
          <Box mt={3}>
            <Typography variant="h6" gutterBottom>Order History</Typography>
            {profile.orders.map((order, index) => (
              <Box key={index} mb={2}>
                <Typography><strong>Order ID:</strong> {order.orderId}</Typography>
                <Typography><strong>Date:</strong> {order.date}</Typography>
                <Typography><strong>Payment Mode:</strong> {order.paymentMode}</Typography>
                <Typography><strong>Amount:</strong> {order.amount}</Typography>
                <Typography><strong>Status:</strong> {order.status}</Typography>
              </Box>
            ))}
          </Box>

          {/* Refunds */}
          <Box mt={3}>
            <Typography variant="h6" gutterBottom>Refunds</Typography>
            {profile.refunds.map((refund, index) => (
              <Box key={index} mb={2}>
                <Typography><strong>Refund ID:</strong> {refund.refundId}</Typography>
                <Typography><strong>Reason:</strong> {refund.reason}</Typography>
                <Typography><strong>Amount:</strong> {refund.amount}</Typography>
                <Typography><strong>Date:</strong> {refund.date}</Typography>
              </Box>
            ))}
          </Box>

          <Box mt={2}>
            <Button variant="outlined" onClick={() => {
              setIsEditing(true);
              setShowProfileDetails(false);
              setFormData({ ...profile });
            }}>
              Edit Profile
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Profile;
