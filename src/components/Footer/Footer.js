import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterSubscription, FooterSubheading, FooterSubText, Form, FormInput, 
    FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia,
SocialMediaWrap,SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';
import { Button } from '../../globalStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubheading>
                    Join me
                </FooterSubheading>
                <FooterSubText>
                    You can not join anytime u want
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' Placeholder='Your Email'/>
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                        <FooterLink to='/Contact-me'>Hi</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/> 
                        </SocialLogo>
                        <WebsiteRights>Made by Kyle Seto</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'//github.com/kyleseto2'} target="_blank" aria-label="Github" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIconLink> 
                        <SocialIconLink href={'//www.linkedin.com/in/kyle-seto2'} target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink> 
                        <SocialIconLink href={'//www.instagram.com/kyle.seto'} target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink> 
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
