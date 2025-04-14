import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Collapse,
  Card,
  CardContent,
  CardActionArea,
  Divider,
} from '@mui/material';

const faqs = [
  {
    question: "How do I track my order?",
    answer: "Go to 'My Orders' in your profile to track order status in real-time."
  },
  {
    question: "What is your return policy?",
    answer: "You can return items within 7 days of delivery for a full refund."
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, you can cancel orders before they are shipped."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, UPI, and cash on delivery."
  },
  {
    question: "Is there a delivery charge?",
    answer: "Delivery is free for orders above ₹499. A ₹30 fee applies below that."
  },
  {
    question: "How do I change my delivery address?",
    answer: "Edit your address in the 'Profile' section before placing an order."
  },
  {
    question: "Do you deliver to my area?",
    answer: "Check pin code availability on the product page before ordering."
  }
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Support Center</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea onClick={() => setOpenFaq(!openFaq)}>
              <CardContent>
                <Typography variant="h6">FAQs</Typography>
                <Typography variant="body2" color="textSecondary">
                  Click to view frequently asked questions.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Collapse in={openFaq}>
              <CardContent>
                {faqs.map((faq, idx) => (
                  <Box key={idx} mb={2}>
                    <Typography variant="subtitle1"><strong>Q:</strong> {faq.question}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>A:</strong> {faq.answer}</Typography>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea onClick={() => setOpenContact(!openContact)}>
              <CardContent>
                <Typography variant="h6">Contact Support</Typography>
                <Typography variant="body2" color="textSecondary">
                  Click to get in touch with our team.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Collapse in={openContact}>
              <CardContent>
                <Typography variant="body1" gutterBottom><strong>Email:</strong> support@amart.com</Typography>
                <Typography variant="body1" gutterBottom><strong>Phone:</strong> +91 9825757614</Typography>
                <Typography variant="body1" gutterBottom><strong>Live Chat:</strong> Available 9AM – 9PM daily</Typography>
                <Typography variant="body1"><strong>Response Time:</strong> Within 24 hours</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Support;

