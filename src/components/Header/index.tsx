
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'


export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title='Home'>
        <img src={Logo} alt="" />
      </NavLink>
      
      <nav>

        <div className="location">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre,RS</span>
        </div>

        <NavLink to="/checkout" title='Checkout'>
          <div className="cart">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={22} weight="fill" />
          </div>
        </NavLink>

      </nav>
    </HeaderContainer>
  )
}

