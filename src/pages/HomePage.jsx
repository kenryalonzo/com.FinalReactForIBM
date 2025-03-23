// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  console.log("HomePage component rendered");
  return (
    <div>
      <h1>Bienvenue chez Paradise Nursery</h1>
      <p>Découvrez notre large sélection de plantes d'intérieur.</p>
      <Link to="/products">
        <button>Voir les produits</button>
      </Link>
    </div>
  );
}

export default HomePage;