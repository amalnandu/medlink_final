// import React from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";
// import { Logo } from "../images/images";

// export const Nav = styled.nav`
//   background: #000;
//   height: 5vh;
//   min-height: 40px;
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   z-index: 10;

//   /* Third Nav */
//   /* justify-content: flex-start; */
// `;

// export const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     color: #15cdfc;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   /* Second Nav */
//   /* margin-right: 24px; */

//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;

//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #256ce1;
//   padding: 10px 22px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   /* Second Nav */
//   margin-left: 24px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;

// const Navbar = ({options}) => {

//   const Links=options.map((option)=>{
//     if(option.type=="link"){
//       return <NavLink to={option.link}>{option.name}</NavLink>
//     }
//     else if(option.type=="button"){
//       return <NavBtnLink to={option.link}>{option.name}</NavBtnLink>
//     }
//   })
  
//   return (
//     <>
//       <Nav>
//         <NavLink to="/">
//           <img src={Logo} alt="logo" style={{ height: "80%" }} />
//         </NavLink>
//         <Bars />
//         <NavMenu>
//           {
//             Links.map((link)=>link)
//           }
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to="/signin">Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;



import React from "react";
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {Logo} from "../images/images"

const Nav = styled.nav`
  background: #000;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const Navbar=()=>{
  return (
     <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo' style={{height:"80%"}} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/requests' activeStyle>
            Requests
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );

}

export default Navbar