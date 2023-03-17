import { v4 as uuidv4 } from 'uuid';
export const dadosCafe = [
  {
      id: uuidv4(),
      srcCoffee: "src/assets/Coffee.png",
      typeCoffee: ["Tradicional"],
      titleCoffee: "Expresso Tradicional",
      subTitleCoffee: "O tradicional café feito com água quente e grãos moídos",
      valueCoffee: "9,90"
  },
  {
    id: uuidv4(),
    srcCoffee: "src/assets/expresso-gelado.png",
    typeCoffee: ["Tradicional", "Gelado"],
    titleCoffee: "Expresso Gelado",
    subTitleCoffee: "Bebida preparada com café expresso e cubos de gelo",
    valueCoffee: "9,90"
  },
  {
    id: uuidv4(),
    srcCoffee: "src/assets/chocolate-quente.png",
    typeCoffee: ["Especial", "Com Leite"],
    titleCoffee: "Chocolate Quente",
    subTitleCoffee: "Bebida feita com chocolate dissolvido no leite quente e café",
    valueCoffee: "9,90"
  }
]

