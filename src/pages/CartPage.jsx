import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Votre Panier</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center border-b py-2">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
          <div>
            <h3>{item.name}</h3>
            <p>Prix unitaire : {item.price} €</p>
            <p>Quantité : {item.quantity}</p>
            <button
              onClick={() => handleIncrease(item.id)}
              className="bg-green-500 text-white p-1 rounded mr-1"
            >
              +
            </button>
            <button
              onClick={() => handleDecrease(item.id)}
              className="bg-yellow-500 text-white p-1 rounded mr-1"
            >
              -
            </button>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <p className="text-xl font-semibold mt-4">Total : {totalPrice} €</p>
    </div>
  );
}

export default CartPage;