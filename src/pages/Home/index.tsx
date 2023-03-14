import Cart from '../../assets/cart.svg'
import Clock from '../../assets/clock.svg'
import Box from '../../assets/box.svg'
import CoffeeImg from '../../assets/coffee.svg'
import BigCoffee from '../../assets/big-coffee.svg'
import { MainConteiner } from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'
import { dadosCafe } from '../../dados/dados'



export function Home() {
  return (
    <MainConteiner>
      <div className="content">

        <div className="content-info">
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <span className='text'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <div className="cont-info">

            <div className="info">
              <img src={Cart} alt="" />
              <span>Compra simples e segura</span>
            </div>

            <div className="info">
              <img src={Box} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className="info">
              <img src={Clock} alt="" />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className="info">
              <img src={CoffeeImg} alt="" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <div className="content-big-coffee">
          <img src={BigCoffee} alt="Café grande" />
        </div>

      </div>
      
      <div className="our-coffee">Nossos cafés</div>

      <ul>
        {dadosCafe.map((coffee, index) => {
          return <CoffeeCard 
                    key={coffee.id}
                    id={coffee.id}
                    imgCoffee={coffee.src}
                    coffeType={coffee.type}
                    title={coffee.title}
                    subTitle={coffee.subtitle}
                    coffeValue={coffee.value}
                  />
        })}
      </ul>
    </MainConteiner>
  )
}

//       id: uuidv4(),
//       type: ["Tradicional"],
//       title: "Expresso Tradicional",
//       subtitle: "O tradicional café feito com água quente e grãos moídos",
//       value: "9,90"