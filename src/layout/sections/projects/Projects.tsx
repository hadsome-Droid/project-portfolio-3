import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import project1 from "../../../assets/images/projects/project1.webp"
import project2 from "../../../assets/images/projects/project2.webp"
import project3 from "../../../assets/images/projects/project3.webp"
import Arrow from "../../../assets/images/alt/Arrow.svg"
import {SectionTitle} from "../../../components/SectionTitle";


const projectsItem = [
    {
        id: 1,
        src: project1,
        info: 'Made a social media manager template using HTML 5, CSS and JS.',
    },
    {
        id: 2,
        src: project2,
        info: 'Made a simple card page using HTML 5 and CSS 3',
    },
    {
        id: 3,
        src: project3,
        info: 'Made an I.P address tracking website.',
    },

]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'} gap={'24px'}>
                    <span>A select number of projects</span>
                    <ProjectBox>

                        {projectsItem.map((p) => {
                            return (
                                <Project key={p.id}>
                                    <ProjectPrev>
                                        <img src={p.src} alt={'project'}/>
                                    </ProjectPrev>
                                    <ProjectInfo>
                                        {p.info}
                                    </ProjectInfo>
                                    <ProjectLink>Learn More <img src={Arrow} alt=""/> </ProjectLink>
                                </Project>
                            )
                        })}

                    </ProjectBox>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: #343D68;

  ${Container} {
    padding-top: 30px;
    padding-bottom: 40px;

    span {
      display: block;
      color: rgba(255, 255, 255, 0.87);
      font-size: 18px;

      font-weight: 400;

    }
  }
  
  ${SectionTitle}{
  color: rgba(255, 255, 255, 0.87);
    margin-bottom: 8px;
}
`

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-width: 100%;
  width: 100%;
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 372px;
  width: 100%;
  min-height: 434px;
  padding-bottom: 12px;
  border: 4px solid;
  border-image-source: linear-gradient(-50deg, #0D54BE, #20ECD3);
  border-image-slice: 1;
`

const ProjectPrev = styled.div`

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProjectInfo = styled.p`
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
`

const ProjectLink = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 130px;
  height: 42px;
  border-radius: 4px;
  border: 2px solid #FFF;
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`