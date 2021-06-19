import logo from '../img/logo.png'
import { NavItems } from './NavItems'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1px;
`
const NavButton = styled.button`
  background-color: #f27264;
  color: #fff;
  border: 1px solid #ae3225;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px;
  min-width: 183px;
  min-height: 40px;
`
export const Nav = () => {
  return (
    <div className="section-bg-blue shadow-50">
      <div className="container">
        <NavbarContainer>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <NavItems />
          <NavButton>Request a demo</NavButton>
        </NavbarContainer>
      </div>
    </div>
  )
}
