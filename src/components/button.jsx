import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
 
};

const ButtonStyle = styled.button`
  outline: 0;
  margin: 10px 0px;
  border: 2px solid #10B3A0;
  border-radius: 30px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    // background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 1;
  }
`;

ButtonStyle.defaultProps = {
  theme: "blue",
};

function clickMe() {
  alert("You clicked me!");
}

const ButtonToggle = styled(ButtonStyle)`
  opacity: 1;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

function Button({ children, style,className,onClick,type}) {
  return (
    <ButtonStyle type={type} className={className} style={style} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;



function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}

const types = ["Cash", "Credit Card", "Bitcoin"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}


const TextButtonElement = styled.button`
  margin:0em;
  padding: 0.5em 1em;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function TextButton({children,style}){
  const [_active, setActive] = useState(false);
  return (<TextButtonElement style={style} active={_active === true} onClick={() => setActive(!_active)} >{children}</TextButtonElement>);
}


export { Button, ToggleGroup, TabGroup ,TextButton};
