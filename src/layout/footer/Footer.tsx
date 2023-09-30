import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper>
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
    
`
const BlockLinks = styled.div`

`
const Git = styled.div`

`