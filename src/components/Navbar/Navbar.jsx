import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import { NavbarContainer, NavbarInnerContainer, Left, Center, Right, Logo, NavbarExtendedLeft, NavbarExtendedCenter, NavbarExtendedRight, MobileLogo, NavbarExtendedContainer, NavbarLinkExtended, NavbarLinkContainer, NavbarLink, DropDownItems, OpenLinksButton } from './Navbar.style'

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
      <NavbarExtendedContainer>
        <NavbarExtendedLeft>
          <OpenLinksButton onClick={() => { setExtendNavbar((curr) => !curr) }}>
            {extendNavbar ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </OpenLinksButton>
        </NavbarExtendedLeft>
        <NavbarExtendedCenter>
          <MobileLogo>
            <div to={'/'}>LOREM.IPSUM</div>
          </MobileLogo>
        </NavbarExtendedCenter>
        <NavbarExtendedRight>
        </NavbarExtendedRight>
      </NavbarExtendedContainer>
      {extendNavbar && (
        <NavbarLinkContainer>
          <NavbarLinkExtended to={'/look-book'}>LOOK BOOK</NavbarLinkExtended>
          <NavbarLinkExtended to={'/shop/all'}>SHOP</NavbarLinkExtended>
          <NavbarLinkExtended to={'/about'}>ABOUT</NavbarLinkExtended>
          <NavbarLinkExtended to={'/register'}>REGISTER</NavbarLinkExtended>
          <NavbarLinkExtended to={'/login'}>LOGIN</NavbarLinkExtended>
        </NavbarLinkContainer>
      )}
    </NavbarContainer>

  )
}

export default Navbar