import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>{product.description}</p>
      <p>Prix : {product.price} €</p>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white p-2 rounded mt-2"
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;