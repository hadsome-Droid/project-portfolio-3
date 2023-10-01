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
                                        <Icon iconId={'telegram'}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Icon iconId={'linkedin'}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Icon iconId={'email'}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Icon iconId={'whatsapp'}/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </BlockLinks>
                    <Git>
                        <p>More projects I’ve worked on</p>
                        <Icon iconId={'github'}/>
                        <small>@ <a href="">john-doe</a>  on github</small>
                    </Git>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #F7F6FB;
  position: relative;
  z-index: 0;
  
  ${Container}{
   
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

    ul{
      display: flex;
      
    }
`
const Git = styled.div`

`