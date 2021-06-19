import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
`
const NavItemsContainer = styled.div``

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #384248;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.15px;
  margin-right: 16px;
`

export const NavItems = () => {
  return (
    <Navbar>
      <NavItemsContainer>
        <Button>
          Why yellow.ai? <ExpandMoreIcon style={{ marginLeft: 5 }} />
        </Button>
      </NavItemsContainer>
      <NavItemsContainer>
        <Button>
          Platform <ExpandMoreIcon style={{ marginLeft: 5 }} />
        </Button>
      </NavItemsContainer>

      <NavItemsContainer>
        <Button>
          Solutions <ExpandMoreIcon style={{ marginLeft: 5 }} />
        </Button>
      </NavItemsContainer>

      <NavItemsContainer>
        <Button>
          Resources <ExpandMoreIcon style={{ marginLeft: 5 }} />
        </Button>
      </NavItemsContainer>

      <NavItemsContainer>
        <Button>
          Company <ExpandMoreIcon style={{ marginLeft: 5 }} />
        </Button>
      </NavItemsContainer>
    </Navbar>
  )
}
