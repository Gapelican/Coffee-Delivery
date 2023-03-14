import { v4 as uuidv4 } from 'uuid';
export const dadosCafe = [
  {
      id: uuidv4(),
      src: "src/assets/Coffee.png",
      type: ["Tradicional"],
      title: "Expresso Tradicional",
      subtitle: "O tradicional café feito com água quente e grãos moídos",
      value: "9,90"
  },
  {
    id: uuidv4(),
    src: "src/assets/expresso-gelado.png",
    type: ["Tradicional", "Gelado"],
    title: "Expresso Gelado",
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    value: "9,90"
  },
  {
    id: uuidv4(),
    src: "src/assets/chocolate-quente.png",
    type: ["Especial", "Com Leite"],
    title: "Chocolate Quente",
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9,90"
  }
]

