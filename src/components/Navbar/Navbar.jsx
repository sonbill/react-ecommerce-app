import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import { NavbarContainer, NavbarInnerContainer, Left, Center, Right, Logo, SLink, MobileIcon, MobileLogo, NavbarExtendedContainer, NavbarLinkExtended, NavbarLinkContainer, NavbarLink, DropDownItems, OpenLinksButton } from './Navbar.style'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(true);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <Left>
          <NavbarLinkContainer>
            <OpenLinksButton onClick={() => { setExtendNavbar((curr) => !curr) }}>
              {extendNavbar ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
            </OpenLinksButton>
            <Logo>
              <NavbarLink to={'/'}>LOREM.IPSUM</NavbarLink>
            </Logo>
          </NavbarLinkContainer>
        </Left>
        <Center>
          <NavbarLink to={'/look-book'}>LOOK BOOK</NavbarLink>
          <NavbarLink to={'/shop/all'}>SHOP</NavbarLink>
          <NavbarLink to={'/about'}>ABOUT</NavbarLink>
        </Center>
        <Right>
          <NavbarLink to={'/register'}>REGISTER</NavbarLink>
          <NavbarLink to={'/login'}>LOGIN</NavbarLink>
        </Right>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to={'/look-book'}>LOOK BOOK</NavbarLinkExtended>
          <NavbarLinkExtended to={'/shop/all'}>SHOP</NavbarLinkExtended>
          <NavbarLinkExtended to={'/about'}>ABOUT</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>

  )
}

export default Navbar