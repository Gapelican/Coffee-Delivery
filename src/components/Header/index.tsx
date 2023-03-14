
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'


export function Header() {
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
            <ShoppingCart size={22} weight="fill" />
          </div>
        </NavLink>

      </nav>
    </HeaderContainer>
  )
}

