// src/pages/ProductListPage.js
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  const aromaticPlants = products.filter((p) => p.category === "Aromatiques");
  const medicinalPlants = products.filter((p) => p.category === "Médicinales");

  return (
    <div>
      <h2>Plantes Aromatiques</h2>
      <div className="product-list">
        {aromaticPlants.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2>Plantes Médicinales</h2>
      <div className="product-list">
        {medicinalPlants.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Ajoutez d'autres sections de catégories */}
    </div>
  );
}

export default ProductListPage;