import React from 'react';
import styled from "styled-components";
import Gear from "../../assets/images/different/gear.svg"

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact me</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

  ul {
    display: flex;
    gap: 30px;
  }

  a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    position: relative;
    padding-left: 8px;
    margin-left: 20px;

    &:after,
    &:before {
      content: '';
      display: none;
      background-image: url(${Gear});
      background-size: cover;
      position: absolute;
      

    }

    &:after {
      width: 12px;
      height: 12px;
      top: 11px;
      left: -8px;
    }

    &:before {
      width: 20px;
      height: 20px;
      top: -1px;
      left: -24px;
    }

    &:hover, &.active {
      &:before,
      &:after{
        display: block;
      }
      &:before{
        animation: rotationRight 7s linear infinite;
      }
      &:after{
        animation: rotationLeft 7s linear infinite;
      }
      color: #E84949;
    }
    
    @keyframes rotationRight {
    0% {
      transform: rotate(0deg);
    }
      100%{
        transform: rotate(360deg);
      }
  }
    @keyframes rotationLeft {
      0% {
        transform: rotate(360deg);
      }
      100%{
        transform: rotate(0deg);
      }
    }
  }

`
