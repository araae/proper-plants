//map over plants and render a PlantCard for each item
import PlantCard from "./PlantCard";

export default function PlantList({ plants, addToCart }) {
  return (
    <div>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}
