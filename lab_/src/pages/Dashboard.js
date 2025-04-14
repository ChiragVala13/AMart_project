import React, { useState } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import AnimatedCard from '../components/AnimatedCard';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Mon', sales: 1000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const visitorsData = [
  { name: 'Mon', visitors: 1200 },
  { name: 'Tue', visitors: 1800 },
  { name: 'Wed', visitors: 1500 },
  { name: 'Thu', visitors: 2300 },
  { name: 'Fri', visitors: 2000 },
  { name: 'Sat', visitors: 2200 },
  { name: 'Sun', visitors: 2500 },
];

const revenueData = [
  { name: 'Mon', revenue: 8000 },
  { name: 'Tue', revenue: 12000 },
  { name: 'Wed', revenue: 9000 },
  { name: 'Thu', revenue: 15000 },
  { name: 'Fri', revenue: 11000 },
  { name: 'Sat', revenue: 13000 },
  { name: 'Sun', revenue: 16000 },
];

const ordersData = [
  { name: 'Mon', orders: 80 },
  { name: 'Tue', orders: 120 },
  { name: 'Wed', orders: 100 },
  { name: 'Thu', orders: 140 },
  { name: 'Fri', orders: 110 },
  { name: 'Sat', orders: 130 },
  { name: 'Sun', orders: 150 },
];

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderChart = () => {
    switch (selectedCard) {
      case 'Sales':
        return (
          <LineChart data={salesData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        );
      case 'Visitors':
        return (
          <LineChart data={visitorsData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visitors" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        );
      case 'Revenue':
        return (
          <LineChart data={revenueData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" strokeWidth={2} />
          </LineChart>
        );
      case 'Orders':
        return (
          <LineChart data={ordersData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Dashboard Overview
      </Typography>

      {/* Stats Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <div onClick={() => handleCardClick('Sales')}>
            <AnimatedCard title="Sales" content="₹5,000 Today" />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div onClick={() => handleCardClick('Visitors')}>
            <AnimatedCard title="Visitors" content="1,230 Unique" />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div onClick={() => handleCardClick('Revenue')}>
            <AnimatedCard title="Revenue" content="₹1,20,000 This Month" />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div onClick={() => handleCardClick('Orders')}>
            <AnimatedCard title="Orders" content="158 Orders Today" />
          </div>
        </Grid>
      </Grid>

      {/* Chart Section */}
      {selectedCard && (
        <Box mt={5}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight="medium">
              {selectedCard} Overview
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              {renderChart()}
            </ResponsiveContainer>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;

