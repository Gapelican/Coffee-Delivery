import { ShoppingCart } from "phosphor-react";
import { ContCoffee } from "./styles";

import AddImg from '../../assets/add.svg'
import SubtractImg from '../../assets/subtract.svg'
import { NavLink } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export interface Coffee {
  id: number,
  tags: string[],
  name: string,
  description: string,
  photo: string,
  price: number
   
}

interface CoffeeProps {
  coffee: Coffee; 
}


export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(state => state +1);
    
  }

  function handleDecrease() {
    setQuantity(state => state - 1);
  }

  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }

    addCoffeeToCart(coffeeToAdd)
  }


  const formattedPrice = formatMoney(coffee.price)

 
  return (
    <ContCoffee>
      <img src={coffee.photo} alt="Imagem do café" />
      <div className="content-type-coffee">
      {coffee.tags.map((tag, index) => {
          return <div key={index} className="type-coffee">{tag}</div>
        })}
      </div>
      <div className="coffee-name">{coffee.name}</div>
      <p>{coffee.description}</p>
      <div className="content-info">
        <span className="price"><span>R$</span>{formattedPrice}</span>
        <div className="cont-info">
          <div className="quantity-items">
            <button disabled={quantity <= 1} onClick={handleDecrease}>
              <img src={SubtractImg} alt="" />
            </button>
            <input type="number" value={quantity} min={0} max={99}/>
            <button onClick={handleIncrease}>
              <img src={AddImg} alt="" />
            </button>
          </div>
          
          <div onClick={handleAddToCart} className="cart">
            <ShoppingCart size={22} weight="fill" />
          </div>
          
        </div>
      </div>
    </ContCoffee>
  )
}

