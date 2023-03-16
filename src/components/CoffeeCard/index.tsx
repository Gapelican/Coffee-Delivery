import { ShoppingCart } from "phosphor-react";
import { ContCoffee } from "./styles";
import { ChangeEvent, useState } from "react";
import AddImg from '../../assets/add.svg'
import SubtractImg from '../../assets/subtract.svg'
import { NavLink } from "react-router-dom";

interface CoffeeProps {
    id: string;
    imgCoffee: string;
    coffeType: string[];
    title: string;
    subTitle: string;
    coffeValue: string;
   
}


export function CoffeeCard({id, imgCoffee, coffeType, title, subTitle, coffeValue}: CoffeeProps) {
 
  const [quantity, setQuantity] = useState(0);

  

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.target.value));
  }

  function addCoffee() {
    console.log("add");
    
    setQuantity(quantity + 1);
  }
  
  function subtracttCoffee() {
    if (quantity != 0) setQuantity(quantity - 1)
  }

  return (
    <ContCoffee>
      <img src={imgCoffee} alt="Imagem do café" />
      <div className="content-type-coffee">
        {coffeType.map((coffeType, index) => {
          return <div key={index} className="type-coffee">{coffeType}</div>
        })}
      </div>
      <div className="coffee-name">{title}</div>
      <p>{subTitle}</p>
      <div className="content-info">
        <span className="price"><span>R$</span>{coffeValue}</span>
        <div className="cont-info">
          <div className="quantity-items">
            <button onClick={subtracttCoffee}>
              <img src={SubtractImg} alt="" />
            </button>
            <input onChange={handleChange} type="number" value={quantity} min={0} max={99}/>
            <button onClick={addCoffee}>
              <img src={AddImg} alt="" />
            </button>
          </div>
          <NavLink to="/checkout" title="Checkout">
            <div className="cart">
              <ShoppingCart size={22} weight="fill" />
            </div>
          </NavLink>
        </div>
      </div>
    </ContCoffee>
  )
}

// key={coffee.id}
//                     id={coffee.id}
//                     coffeType={coffee.type}
//                     title={coffee.title}
//                     subTitle={coffee.subtitle}
//                     coffeValue={coffee.value}