import { useState } from 'react'
import logo from '../img/logo.png'
import { NavItems } from './NavItems'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

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
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="section-bg-blue shadow-50">
      <div className="container">
        <NavbarContainer>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <NavItems />
          <NavButton onClick={handleClickOpen}>Request a demo</NavButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Request a demo</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To request a demo please fill the form below!
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </NavbarContainer>
      </div>
    </div>
  )
}
