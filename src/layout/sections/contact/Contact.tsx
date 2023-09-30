import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import standing from "../../../assets/images/different/standing_chats.webp"

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <Title title={'Contact Me'}/>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    <div>
                        <img src={standing} alt=""/>
                    </div>
                    <form action="">
                        <input type="email"/>
                        <textarea></textarea>
                        <button type={'submit'}>Send Message</button>
                    </form>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

`