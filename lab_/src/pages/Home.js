import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  // Corrected: Relative paths from /public folder
  const categories = [
    { name: "Fruits & Vegetables", imgSrc: "/images/fruits and vegtables.jpeg" },
    { name: "Snacks", imgSrc: "/images/snacks.jpeg" },
    { name: "Beverages", imgSrc: "/images/beverage.jpeg" },
    { name: "Dairy", imgSrc: "/images/dairy_products.jpeg" },
    { name: "Bakery", imgSrc: "/images/bakery_photo_a.jpeg" },
    { name: "Household", imgSrc: "/images/household.jpeg" }
  ];

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="home">
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1 className="welcome-text">Welcome to AMart</h1>
        <p>Your daily needs delivered to your door</p>
        <button className="shop-now-btn" onClick={handleShopNow}>Shop Now</button>
      </div>

      {/* Category Section */}
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories">
        {categories.map((cat) => (
          <div
            className="category-card"
            key={cat.name}
            onClick={handleShopNow}
            style={{ cursor: 'pointer' }}
          >
            <img src={cat.imgSrc} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

