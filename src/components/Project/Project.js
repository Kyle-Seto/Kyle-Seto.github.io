import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
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
          <ProjectHeading>Our Services</ProjectHeading>
          <ProjectContainer>
            <ProjectCard to='/sign-up'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiRock />
                </ProjectCardIcon>
                <ProjectCardPlan>Starter Pack</ProjectCardPlan>
                <ProjectCardCost>$99.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                  <ProjectCardFeature>$10,000 Budget</ProjectCardFeature>
                  <ProjectCardFeature>Retargeting analytics</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard to='/sign-up'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiCrystalBars />
                </ProjectCardIcon>
                <ProjectCardPlan>Gold Rush</ProjectCardPlan>
                <ProjectCardCost>$299.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>1000 New Users</ProjectCardFeature>
                  <ProjectCardFeature>$50,000 Budget</ProjectCardFeature>
                  <ProjectCardFeature>Lead Gen Analytics</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
            </ProjectCard>
            <ProjectCard to='/sign-up'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiCutDiamond />
                </ProjectCardIcon>
                <ProjectCardPlan>Diamond Kings</ProjectCardPlan>
                <ProjectCardCost>$999.99</ProjectCardCost>
                <ProjectCardLength>per month</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>Unlimited Users</ProjectCardFeature>
                  <ProjectCardFeature>Unlimited Budget</ProjectCardFeature>
                  <ProjectCardFeature>24/7 Support</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProjectCardInfo>
            </ProjectCard>
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
}
export default Project;