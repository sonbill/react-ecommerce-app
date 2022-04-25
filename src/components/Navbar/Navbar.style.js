import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  height:${(props) => (props.extendNavbar ? "100vh" : "80px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height:80px;
  }
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Logo = styled.h1`
  font-weight: bold;
  text-align:center;
  display: block;
  @media screen and (max-width:700px) {
    display: none;
  }
`
export const Center = styled.div`
  flex: 1;
`
export const MobileIcon = styled.button`
  display: none;
  border: none;
  background:none;
  @media screen and (max-width: 960px) {
    display:block;
  }
`
export const MobileMenuWrapper = styled.div`
    flex:1;
    @media screen and (max-width:960px) {
      display: none;
    }
`
export const MobileMenuListItems = styled.ul`
  display: flex;
  justify-content:space-between;
  align-items:center;
`
export const MobileMenuItem = styled.li`
    list-style: none;
    a: hover { 
      text-decoration: underline;
    }
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media(min-width: 768px) {
    display: hidden;
  }
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  a:hover {
    text-decoration: underline;
  }
`
export const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  a: hover {
   text-decoration: underline;
  }
`
export const DropDown = styled.ul`
  display: none;
  position: absolute;
  z-index: 1;
`
export const DropDownItems = styled.li`
&:hover ${DropDown} {
  display:block;
}
`
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display:none;
  }
`
export const NavbarInnerContainer = styled.div`

`
export const NavbarLinkContainer = styled.div`

`
export const NavbarLink = styled(Link)`
  @media (max-width:700px) {
    display: none;
  }
`
export const NavbarLinkExtended = styled(Link)`

`
export const OpenLinksButton = styled.button`
  width: 70px;
  height:50px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  @media (min-width: 700px) {
   display: none;
  }
`

// const CartBtn = styled.button`
//   background-color: none;
//   background: none;
//   border: none;
//   cursor:pointer;
//   padding:0;
// `