import React from 'react';
import { Button } from '../../globalStyles';
import { IoIosWater } from 'react-icons/io';
import { CgCardSpades } from 'react-icons/cg';
import { BiPoll } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import {
  ProjectSection,
  ProjectWrapper,
  ProjectHeading,
  ProjectContainer,
  ProjectCard,
  ProjectCardInfo,
  ProjectCardIcon,
  ProjectCardPlan,
  ProjectCardCost,
  ProjectCardLength,
  ProjectCardFeatures,
  ProjectCardFeature
} from './Project.elements';

function Project() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProjectSection>
        <ProjectWrapper>
          <ProjectHeading>My Projects</ProjectHeading>
          <ProjectContainer>
            <ProjectCard to='/Projects'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <CgCardSpades />
                </ProjectCardIcon>
                <ProjectCardPlan>Straights</ProjectCardPlan>
                <ProjectCardCost>C++ Game</ProjectCardCost>
                <ProjectCardLength></ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>OOP Programming Principles</ProjectCardFeature>
                  <ProjectCardFeature>Made UML Diagrams</ProjectCardFeature>
                  <ProjectCardFeature>Used C++ Compilers and Makefile</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>View Git Repo</Button>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard to='/Projects'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <IoIosWater />
                </ProjectCardIcon>
                <ProjectCardPlan>Hydronizer</ProjectCardPlan>
                <ProjectCardCost>Smart Coaster</ProjectCardCost>
                <ProjectCardLength></ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>Chrome Extension and Webpage</ProjectCardFeature>
                  <ProjectCardFeature>Tracks Water Consumption</ProjectCardFeature>
                  <ProjectCardFeature>Times Water Breaks</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>View Git Repo</Button>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard to='/Projects'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <BiPoll />
                </ProjectCardIcon>
                <ProjectCardPlan>Canadian Election Poll</ProjectCardPlan>
                <ProjectCardCost>Webapp</ProjectCardCost>
                <ProjectCardLength></ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>Developed in Django</ProjectCardFeature>
                  <ProjectCardFeature>Tracks User Responses</ProjectCardFeature>
                  <ProjectCardFeature>Has User Accounts and Superusers</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>View Git Repo</Button>
              </ProjectCardInfo>
            </ProjectCard>
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
}
export default Project;