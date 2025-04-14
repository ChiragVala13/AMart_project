import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider, CartContext } from './context/CartContext';

import MyNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Support from './pages/Support';
import Payment from './pages/Payment'; // ✅ Step 1

const AppContent = () => {
  const { getTotalItems, getTotalPrice } = useContext(CartContext);

  return (
    <Router>
      <MyNavbar />
      <Box display="flex">
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: { sm: '240px' } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />
            <Route path="/payment" element={<Payment />} /> {/* ✅ Step 2 */}
          </Routes>
        </Box>
      </Box>

      <Box position="fixed" bottom={16} right={16} textAlign="center">
        <IconButton color="primary" component="span">
          <Badge badgeContent={getTotalItems()} color="secondary">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
        <Box fontSize="16px" color="primary.main">
          <strong>Total: ${getTotalPrice()}</strong>
        </Box>
      </Box>
    </Router>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
