import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/different/myPhoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import Cube from "../../../assets/images/different/cube.svg"
import Ellipse from "../../../assets/images/different/Ellipse.svg"
import Zigzags from "../../../assets/images/different/zigzags.svg"
import Plus from "../../../assets/images/different/plus.svg"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <MainInfoBlock>
                        <MainTitle>Hi👋, I’m a <h1>software developer</h1> </MainTitle>
                        <MainInfo>I’m <Name>Ivan Zotov</Name> , a developer dedicated to making the world a better place one line of code at a time.</MainInfo>
                        <MainLink href="">Hire me</MainLink>
                    </MainInfoBlock>

                    <MainPhotoWrapper>
                        <span></span>
                        <MainPhoto src={photo} alt=""/>
                    </MainPhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: #F7F6FB;
  padding-top: 150px;
  min-height: 80vh;
`
const MainInfoBlock = styled.div`
  max-width: 553px;
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainTitle = styled.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 117.6%;
  letter-spacing: 0.18px;
  color: #343D68;

    h1{
      font-size: 48px;
      font-weight: 600;
      line-height: 117.6%;
      letter-spacing: 0.18px;
      text-transform: capitalize;
    }
`

const MainInfo = styled.p`
  color: rgba(0, 0, 0, 0.70);
  font-size: 18px;
  font-weight: 400;
`

const Name = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.70);
  display: inline-block;
`

const MainLink = styled.a`
  display: inline-block;
  width: 98px;
  height: 42px;
  background-color: #E84949;
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.20), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  color: #FFF;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
`

const MainPhotoWrapper = styled.div`
  display: flex;
  width: 344px;
  height: 390px;
  position: relative;
  
  span{
    display: block;
    width: 38px;
    height: 98px;
    background-image: url(${Zigzags});
    
    &:before{
      content: '';
      width: 27px;
      height: 27px;
      background-image: url(${Plus});
      position: absolute;
      
    }
    &:after{
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid #4F47C8;
      position: absolute;
      
    }
  }

  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background-image: url(${Cube});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
  }
  
  &:after {
    content: '';
    width: 207px;
    height: 70px;
    background-image: url(${Ellipse});
    position: absolute;
    background-repeat: space;
  }
`

const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`