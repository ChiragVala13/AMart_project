// components/AnimatedCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedCard = ({ title, content, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ margin: '1rem', cursor: 'pointer' }}
      onClick={onClick}
    >
      <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;