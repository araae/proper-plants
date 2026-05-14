//import useState from react
//import plants data, PlantList, Cart
//create addToCart function that takes a plant as a parameter
//if it is already in the cart, map over the cart and return a new array
//if it is not in the cart, add it to the cart with a quantity of 1
import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants";
import Cart from "./Cart";

//the hardest part in all of this for me is importing the correct file names

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const alreadyInCart = cart.find((item) => item.id === plant.id);
    if (alreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function incrementItem(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrementItem(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <>
      <header>
        <h1>Plant Shop</h1>
      </header>
      <main>
        <PlantList plants={PLANTS} addToCart={addToCart} />
      </main>
      <aside>
        <Cart
          cart={cart}
          addQuantity={incrementItem}
          removeQuantity={decrementItem}
        />
      </aside>
    </>
  );
}
