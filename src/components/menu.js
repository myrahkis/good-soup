import React from "react";
import Soup from "./soup";
import "./menu.css";

const data = [
  {
    name: "Pumpkin soup",
    ingredients:
      "4 tbsp olive oil, 2 onions, 1kg pumpkin, 700ml chicken stock, 150ml double cream",
    kcal: 317,
    price: 18,
    photo: "soups/pumpkin_soup.jpg",
    soldout: false,
  },
  {
    name: "Spiced carrot & lentil soup",
    ingredients:
      "2 tsp cumin seeds, pinch chilli flakes, 2 tbsp olive oil, 600g carrots, 140g split red lentils, 1l hot vegetable stock, 125ml milk",
    kcal: 238,
    price: 20,
    photo: "soups/spiced_carrot.jpg",
    soldout: true,
  },
  {
    name: "Mushroom soup",
    ingredients:
      "90g butter, 2 medium onions, roughly chopped, 1 garlic clove, 500g mushrooms, 2 tbsp plain flour, 1l stock, 1 bay leaf, 4 tbsp single cream",
    kcal: 309,
    price: 16,
    photo: "soups/mushroom_soup.jpg",
    soldout: false,
  },
  {
    name: "Vegan ramen",
    ingredients:
      "2 garlic cloves, 1½ tbsp white miso paste, 1 tbsp neri goma, 15g dried shiitake mushrooms, 1l vegan stock, 2 tbsp soy sauce, 200g firm tofu, 1 tbsp cornflour, 1 tbsp veg oil, 100g ramen, 1 head pak choi, 2 spring onions, 25g beansprouts, 1 carrot",
    kcal: 556,
    price: 32,
    photo: "soups/vegan_ramen.jpg",
    soldout: false,
  },
];

// const test = [];

function Menu() {
  const soups = data;
  const notEmpty = soups.length > 0;
  
  return (
    <div className="menu">
      <h2>Our best soups</h2>
      {notEmpty ? (
        <ul className="soups">
          {soups.map((soup) => (
            <Soup soup={soup} key={soup.name} className="soup" />
          ))}
        </ul>
      ) : (
        <p>Sorry, our menu is still in development...</p>
      )}
    </div>
  );
}

export default Menu;
