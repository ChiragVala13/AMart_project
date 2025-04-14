import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const FlowChart = ({ title, steps }) => {
  // Set default empty array if steps are undefined or not passed
  const safeSteps = Array.isArray(steps) ? steps : [];

  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
        {safeSteps.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No steps available.
          </Typography>
        ) : (
          safeSteps.map((step, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                padding: 2,
                minWidth: 120,
                textAlign: 'center',
                borderRadius: 2,
                backgroundColor: '#f0f4ff',
              }}
            >
              <Typography variant="subtitle1">{step}</Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
};

export default FlowChart;
