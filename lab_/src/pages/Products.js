// src/pages/Products.js
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Added

const products = [
  { id: 1, name: "Apple", price: "$1.00", image: "/images/Apple.jpeg" },
  { id: 2, name: "Milk", price: "$2.50", image: "/images/Amul milk.jpeg" },
  { id: 3, name: "Bread", price: "$1.20", image: "/images/bread.jpeg" },
  { id: 4, name: "Eggs", price: "$3.00", image: "/images/eggs.jpeg" },
  { id: 5, name: "Cheese", price: "$4.00", image: "/images/Cheese.jpeg" },
  { id: 6, name: "Banana", price: "$0.80", image: "/images/banana.jpeg" },
  { id: 7, name: "Tomato", price: "$1.10", image: "/images/tomato.jpeg" },
  { id: 8, name: "Carrot", price: "$1.30", image: "/images/carrot.jpeg" },
  { id: 9, name: "Cereal", price: "$2.80", image: "/images/cereal.jpeg" },
  { id: 10, name: "Butter", price: "$3.20", image: "/images/butter.jpeg" },
  { id: 11, name: "Juice", price: "$2.90", image: "/images/juice.jpeg" },
  { id: 12, name: "Yogurt", price: "$1.70", image: "/images/yogurt.jpeg" },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ Initialized

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // ✅ Redirect to Cart
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{product.price}</Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;




