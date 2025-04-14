import React, { useState } from 'react';
import { Box, Grid, Typography, Collapse, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import AnimatedCard from '../components/AnimatedCard';

const Orders = () => {
  const [showPendingGraph, setShowPendingGraph] = useState(false);
  const [showCompletedGraph, setShowCompletedGraph] = useState(false);

  const pendingData = [
    { name: 'Apples', orders: 5 },
    { name: 'Milk', orders: 2 },
    { name: 'Bread', orders: 3 },
    { name: 'Eggs', orders: 12 },
  ];

  const completedData = [
    { name: 'Jan', orders: 40 },
    { name: 'Feb', orders: 60 },
    { name: 'Mar', orders: 90 },
    { name: 'Apr', orders: 130 },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Orders</Typography>
      <Grid container spacing={2}>
        {/* Pending Orders */}
        <Grid item xs={12} md={6}>
          <div onClick={() => {
            setShowPendingGraph(!showPendingGraph);
            setShowCompletedGraph(false);
          }} style={{ cursor: 'pointer' }}>
            <AnimatedCard title="Pending Orders" content="You have 12 pending orders." />
          </div>
          <Collapse in={showPendingGraph}>
            <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
              <Typography variant="h6" gutterBottom>Pending Order Breakdown</Typography>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={pendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#ff9800" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Collapse>
        </Grid>

        {/* Completed Orders */}
        <Grid item xs={12} md={6}>
          <div onClick={() => {
            setShowCompletedGraph(!showCompletedGraph);
            setShowPendingGraph(false);
          }} style={{ cursor: 'pointer' }}>
            <AnimatedCard title="Completed Orders" content="320 orders delivered successfully." />
          </div>
          <Collapse in={showCompletedGraph}>
            <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
              <Typography variant="h6" gutterBottom>Completed Orders (Monthly)</Typography>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={completedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orders;


