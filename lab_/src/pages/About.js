import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieData = [
  { name: 'Delivered in 1 Day', value: 60 },
  { name: 'Delivered in 2 Days', value: 30 },
  { name: 'Delayed', value: 10 },
];

const affordablePriceData = [
  { name: 'AMart', price: 80 },
  { name: 'Other Store A', price: 100 },
  { name: 'Other Store B', price: 110 },
];

const featureData = {
  'Fast Navigation': [
    { name: 'Used Frequently', value: 75 },
    { name: 'Not Used Often', value: 25 },
  ],
  'One-Click Add to Cart': [
    { name: 'Used', value: 65 },
    { name: 'Not Used', value: 35 },
  ],
  'Smart Search': [
    { name: 'Accurate Results', value: 80 },
    { name: 'Needs Improvement', value: 20 },
  ],
  Wishlist: [
    { name: 'Saved Items', value: 50 },
    { name: 'Purchased Later', value: 30 },
    { name: 'Ignored', value: 20 },
  ],
};

const featureDescriptions = {
  'Fast Navigation':
    'Fast Navigation helps users reach their desired product pages quickly. About 75% of users rely on this for a smooth browsing experience.',
  'One-Click Add to Cart':
    'This feature simplifies the shopping process. 65% of customers prefer it to minimize time spent during checkout.',
  'Smart Search':
    'Smart Search provides accurate results for quicker decisions. 80% of users found what they needed instantly.',
  Wishlist:
    'Wishlist allows customers to save products for later. 50% revisit saved items, and 30% purchase them eventually.',
};

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedSubCard, setSelectedSubCard] = useState(null);

  const handleMainCardClick = (title) => {
    setSelectedCard(title);
    setSelectedSubCard(null); // reset sub-selection
  };

  const handleSubCardClick = (subTitle) => {
    setSelectedSubCard(subTitle);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        About AMart
      </Typography>
      <Typography variant="body1" mb={4}>
        AMart is your one-stop shop for all your daily essentials with a mission to make grocery shopping effortless, fast, and affordable.
      </Typography>

      <Grid container spacing={3}>
        {['Fast Delivery', 'Easy Shopping', 'Affordable Price', 'Reliable Service'].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card onClick={() => handleMainCardClick(item)} sx={{ cursor: 'pointer' }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {item}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Fast Delivery or Reliable Service Pie Chart */}
      {(selectedCard === 'Fast Delivery' || selectedCard === 'Reliable Service') && (
        <Box height={300} mt={4}>
          <Typography variant="h6" mb={2}>{selectedCard} Stats</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <Typography variant="body1" mt={2}>
            Our delivery performance shows that 60% of orders are delivered within one day, and 90% within two days, making AMart a leader in speed and reliability.
          </Typography>
        </Box>
      )}

      {/* Affordable Price Bar Chart */}
      {selectedCard === 'Affordable Price' && (
        <Box height={300} mt={4}>
          <Typography variant="h6" mb={2}>Affordable Price Comparison</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={affordablePriceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
          <Typography variant="body1" mt={2}>
            AMart consistently offers lower prices compared to competitors. With an average product price of ₹80, we help customers save more on daily essentials.
          </Typography>
        </Box>
      )}

      {/* Easy Shopping Sub-Cards */}
      {selectedCard === 'Easy Shopping' && (
        <>
          <Typography variant="h6" mt={4} mb={2}>Explore Easy Shopping Features:</Typography>
          <Grid container spacing={2}>
            {Object.keys(featureData).map((sub) => (
              <Grid item xs={12} sm={6} md={3} key={sub}>
                <Card onClick={() => handleSubCardClick(sub)} sx={{ cursor: 'pointer' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="body1" align="center">{sub}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* Render Sub-Card Graphs */}
      {selectedSubCard && featureData[selectedSubCard] && (
        <Box height={300} mt={4}>
          <Typography variant="h6" mb={2}>{selectedSubCard} Data</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={featureData[selectedSubCard]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {featureData[selectedSubCard].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <Typography variant="body1" mt={2}>
            {featureDescriptions[selectedSubCard]}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default About;
