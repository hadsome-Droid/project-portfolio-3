import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import Wave from "../../assets/images/different/wave.svg"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} align={'center'}>
                    <BlockLinks>
                        <p>My social media links:</p>
                        <nav>
                            <ul>
                                <li>
                                    <a href="">
                                        <Icon iconId={'linkedin'}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Icon iconId={'telegram'}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Icon iconId={'whatsapp'}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Icon iconId={'email'}/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </BlockLinks>
                    <Git>
                        <p>More projects I’ve worked on</p>

                        <small><Icon iconId={'github'} viewBox={'0 7 64 64'}/> @ <a href="">Ivan Zotov </a>  on github</small>
                    </Git>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #F7F6FB;
  height: 300px;
  position: relative;
  color: #FFFAFA;
  z-index: 0;
  
  ${Container}{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ${FlexWrapper}{
    max-width: 1240px;
    width: 100%;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${Wave});
    background-repeat: repeat-x;
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 0;

    z-index: -1;
  }

`
const BlockLinks = styled.div`
  max-width: 315px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  p{
    padding-bottom: 34px;
    
  }
  
    ul{
      display: flex;
      justify-content: space-between;
    }
`
const Git = styled.div`
  max-width: 270px;
  width: 100%;

  font-size: 18px;
  font-weight: 400;

  
  p{
    padding-bottom: 19px;
    
  }
  
  small{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  a{
    color: #0ACBBF;
  }
`