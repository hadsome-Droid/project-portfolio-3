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
      skillName: 'css3',
    },
    {
      id: 2,
      iconId:  'html',
      skillName: 'html 5',
    },
    {
      id: 3,
      iconId:  'js',
      skillName: 'JavaScript',
    },
    {
      id: 4,
      iconId:  'typescript',
      skillName: 'typescript',
    },
    {
      id: 5,
      iconId:  'react',
      skillName: 'react',
    },
    {
      id: 6,
      iconId:  'figma',
      skillName: 'figma',
    },
    // {
    //   id: 7,
    //   iconId:  'styledComponents',
    //   skillName: 'styledComponents',
    // },

]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <Title title={'Skills'}/>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SkillsBox>
                        <p>I have a vast experience in the following web technologies:</p>
                        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                            {skillItem.map((s)=>{
                                return (
                                    <Skill key={s.id}>
                                        <Icon iconId={s.iconId} width={'75'} height={'75'}/>
                                        <span>{s.skillName}</span>
                                    </Skill>
                                )
                            })}
                            <Skill>
                                <img src={Styled} alt=""/>
                                <span>Styled Components</span>
                            </Skill>
                        </FlexWrapper>
                    </SkillsBox>

                    <div>
                        <img src={UndrawProject} alt=""/>
                    </div>
                </FlexWrapper>

            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #4F47C71B;
`
const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 506px;
  width: 100%;
  min-height: 100%;
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 75px;
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    min-height: 100%;
    min-width: 100%;
    //background-color: #b21111;
    background-image: url(${Polygon});
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: -1;
  }
`