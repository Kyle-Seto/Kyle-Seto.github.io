import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, SocialMedia, SocialMediaWrap,SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
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
