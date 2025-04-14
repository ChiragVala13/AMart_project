import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-3">
          🛒 AMart
        </Navbar.Brand>

        {/* Search Bar on Left Side */}
        <Form className="d-flex me-auto" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search products..."
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-primary" type="submit">Search</Button>
        </Form>

        {/* Navigation Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
