//show pname, plant image, and quantity
//render remove quantity and add quantity buttons
export default function CartItem({ item, addQuantity, removeQuantity }) {
  return (
    <div>
      <p>{item.image}</p>
      <p>{item.name}</p>
      <p>{item.quantity}</p>
      <button onClick={() => removeQuantity(item.id)}>-</button>
      <button onClick={() => addQuantity(item.id)}>+</button>
    </div>
  );
}
