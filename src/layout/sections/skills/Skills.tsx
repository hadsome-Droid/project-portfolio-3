import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import Styled from "../../../assets/images/different/styled-components.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/title/Title";
import UndrawProject from "../../../assets/images/different/undraw_project_completed.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import Polygon from "../../../assets/images/alt/Polygon.svg"

const skillItem = [
    {
      id: 1,
      iconId: 'css',
      skillName: 'CSS3',
    },
    {
      id: 2,
      iconId:  'html',
      skillName: 'HTML 5',
    },
    {
      id: 3,
      iconId:  'js',
      skillName: 'JavaScript',
    },
    {
      id: 4,
      iconId:  'typescript',
      skillName: 'TypeScript',
    },
    {
      id: 5,
      iconId:  'react',
      skillName: 'React',
    },
    {
      id: 6,
      iconId:  'figma',
      skillName: 'Figma',
    },
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <Title title={'Skills'}/>
                <FlexWrapper justify={'space-between'} align={'center'} gap={'10px'} wrap={'wrap'}>
                    <SkillsBox>
                        <SkillsText>I have a vast experience in the following web technologies:</SkillsText>
                        <FlexWrapper wrap={'wrap'} justify={'space-around'} gap={'20px'}>
                            {skillItem.map((s)=>{
                                return (
                                    <Skill key={s.id}>
                                        <Icon iconId={s.iconId} width={'75'} height={'75'}/>
                                        <SkillName>{s.skillName}</SkillName>
                                    </Skill>
                                )
                            })}
                            <Skill>
                                <img src={Styled} alt=""/>
                                <SkillName>Styled Components</SkillName>
                            </Skill>
                        </FlexWrapper>
                    </SkillsBox>

                    <SkillsImageBlock>
                        <img src={UndrawProject} alt=""/>
                    </SkillsImageBlock>
                </FlexWrapper>

            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  padding: 70px 0;
    h2{
      color: #E84949;
      margin-bottom: 30px;
    }
  
`
const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 530px;
  width: 100%;
  min-height: 325px;
`
const SkillsText = styled.p`
  display: block;
padding-bottom: 40px;
  color: #818080;
  font-size: 18px;
  font-weight: 400;
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 80px;
  width: 100%;
  min-height: 100%;
  background-image: url(${Polygon});
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0 3%;
`
const SkillName = styled.span`
  display: block;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  padding-top: 10%;
  width: 80px;
  text-align: center;
`
const SkillsImageBlock = styled.div`
  max-width: 512px;
  width: 100%;
  min-height: 414px;
  
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`