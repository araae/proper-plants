//receive cart array, addQuantity, and removeQuantity as props
//if cart is empty show a message otherwise map over cart and render a CartItem for each
import CartItem from "./Cart";

export default function Cart({ cart, addQuantity, removeQuantity }) {
  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      ))}
    </div>
  );
}
