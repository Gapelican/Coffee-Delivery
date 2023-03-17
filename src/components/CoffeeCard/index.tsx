import { ShoppingCart } from "phosphor-react";
import { ContCoffee } from "./styles";
import { ChangeEvent, useState } from "react";
import AddImg from '../../assets/add.svg'
import SubtractImg from '../../assets/subtract.svg'
import { NavLink } from "react-router-dom";

interface Coffee {
  id:string,
  srcCoffee: string,
  typeCoffee: string[],
  titleCoffee: string,
  subTitleCoffee: string,
  valueCoffee: string
   
}

interface CoffeeCardProps extends Coffee {
  onAddToCart: (item: Coffee) => void;
}

export function CoffeeCard({id, srcCoffee, typeCoffee, titleCoffee, subTitleCoffee, valueCoffee, onAddToCart}: CoffeeCardProps) {

  function handleClick() {
    onAddToCart({id, srcCoffee, typeCoffee, titleCoffee, subTitleCoffee, valueCoffee})
  }

  return (
    <ContCoffee value={id}>
      <img src={srcCoffee} alt="Imagem do café" />
      <div className="content-type-coffee">
      {typeCoffee.map((typeCoffee, index) => {
          return <div key={index} className="type-coffee">{typeCoffee}</div>
        })}
      </div>
      <div className="coffee-name">{titleCoffee}</div>
      <p>{subTitleCoffee}</p>
      <div className="content-info">
        <span className="price"><span>R$</span>{valueCoffee}</span>
        <div className="cont-info">
          <div className="quantity-items">
            <button >
              <img src={SubtractImg} alt="" />
            </button>
            <input type="number" value={0} min={0} max={99}/>
            <button onClick={handleClick}>
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
// id={coffee.id}
// coffeType={coffee.type}
// title={coffee.title}
// subTitle={coffee.subtitle}
// coffeValue={coffee.value}