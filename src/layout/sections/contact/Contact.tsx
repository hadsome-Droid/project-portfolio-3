import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import standing from "../../../assets/images/different/standing_chats.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import Plane from "../../../assets/images/different/paper_plane.webp"

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    <Standing>
                        <img src={standing} alt=""/>
                    </Standing>
                    <Form>
                        <Field type="email" placeholder={'Enter email address'}/>
                        <Field as={'textarea'} placeholder={'Enter message...'}/>
                        <Button type={'submit'}>Send Message <img src={Plane} alt=""/> </Button>
                    </Form>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

    ${Container}{
      padding: 70px 0;
    }
`
const Standing = styled.div`
  
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
  align-items: center;
  max-width: 612px;
  width: 100%;
  min-height: 348px;
  
  textarea{
    padding: 11px 19px;
    resize: none;
    height: 158px;
  }
`
const Field = styled.input`
  width: 100%;
  padding: 12px 18px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.20), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  color: #838383;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  width: 214px;
  height: 50px;
  background: #343D68;
  border-radius: 4px;
  color: #FFFDFD;
  font-size: 18px;
  font-weight: 400;
`