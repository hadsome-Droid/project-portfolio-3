import React from 'react';
import myLogo from "../../assets/images/different/Logo.svg"
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo href="">
            <img src={myLogo} alt=""/>
        </StyledLogo>
    );
};


const StyledLogo = styled.a`
  display: block;
  max-width: 85px;
  max-height: 85px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
`