import React from 'react';
import styled from "styled-components";
import Gear from "../../assets/images/different/gear.svg"

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>
            {props.title}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2`
  display: block;
  margin: 0 auto;
  width: 100%;
  text-align: center;

  position: relative;

  &:after,
  &:before {
    content: '';
    background-image: url(${Gear});
    background-size: cover;
    position: absolute;


  }

  &:after {
    width: 12px;
    height: 12px;
    top: 11px;
    left: 485px;
  }

  &:before {
    width: 20px;
    height: 20px;
    top: -1px;
    left: 44%;
  }
`