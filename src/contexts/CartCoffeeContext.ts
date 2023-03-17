import { ReactNode, createContext } from "react";

interface CoffeeContextType {
  id: string;
  imgCoffee: string;
  coffeType: string[];
  title: string;
  subTitle: string;
  coffeValue: string;
 
}



export const CartCoffeeContext = createContext({} as CoffeeContextType)

interface CartCoffeeContext {
  children: ReactNode
}


export function CartCoffeeContextProvider() {
  



}