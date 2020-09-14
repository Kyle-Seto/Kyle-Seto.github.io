import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubheading, FooterSubText, Form, FormInput, 
    FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './Footer.elements';
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
                        ULTRA
                        </SocialLogo>
                        <WebsiteRights>ULTRA  copyrightsign 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialIconLink> 
                        <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                            <FaLinkedIn />
                        </SocialIconLink> 
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink> 
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
