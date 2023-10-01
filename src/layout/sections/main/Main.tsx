import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/different/myPhoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <div>
                        <MainTitle>Hi👋, I’m a software developer</MainTitle>
                        <p>I’m <Name>Ivan Zotov</Name> , a developer dedicated to making the world a better place one line of code at a time.</p>
                        <a href="">Hire me</a>
                    </div>

                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: #F7F6FB;
`
const Photo = styled.img`
  width: 344px;
  height: 390px;
  object-fit: cover;
`
const MainTitle = styled.h1`

`
const Name = styled.h3`

`