//display plant image and name
//render Add to Cart button
export default function PlantCard({ plant, addToCart }) {
  return (
    <div>
      <p>{plant.image}</p>
      <p>{plant.name}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}
