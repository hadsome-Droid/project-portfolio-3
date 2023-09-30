import React from 'react';
import styled from "styled-components";

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
`