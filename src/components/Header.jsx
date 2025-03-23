import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-green-600 p-4 text-white flex justify-between items-center">
      <nav>
        <Link to="/" className="mr-4">
          Accueil
        </Link>
        <Link to="/products" className="mr-4">
          Produits
        </Link>
        <Link to="/cart" className="flex items-center">
          Panier ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;