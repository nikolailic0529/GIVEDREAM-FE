import styled from "styled-components";
import { FaTelegramPlane,FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { RiDiscordFill, RiGithubFill, RiRedditFill, RiTwitterFill, RiFacebookFill } from "react-icons/ri";

const StyledFooter = styled.footer`
  /* Footer */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 0;
  gap: 40px;
 

  background: radial-gradient(91.53% 133.1% at 50% 133.1%, rgba(255, 255, 255, 0.9) 0%, rgba(113, 61, 255, 0.9) 32.82%, rgba(0, 0, 0, 0) 78.46%);

  /* Inside auto layout */

  flex: none;
  order: 7;
  flex-grow: 0;
  
  @media (max-width: 1024px){
    padding: 40px 0;
    gap: 24px;
  }
`

const StyledSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 1rem;
  
  @media (max-width: 740px){
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  }
`

const StyledSocial = styled.div`
  border: 1px solid var(--border-color);
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  
  border-radius: 14px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11px 8px;
  gap: 4px;

  width: 94.55px;
  height: 46px;
  //gap: 10px;
  
  :hover {
    box-shadow: 0 0 16px -4px #713DFF;
  }

`

const StyleBottomText = styled.div`
  /* © 2023 dao-dream.com. All rights reserved. */
  /* Small text */

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* Light Periwinkle */

  color: var(--secondary-text-color);
`

const socials = [
    {
        'title': 'Channel',
        icon: FaTelegramPlane
    },
    {
        'title': 'Chat',
        icon: FaTelegramPlane
    },
    {
        'title': 'Discord',
        icon: RiDiscordFill
    },
    {
        'title': 'Bot',
        icon: RiDiscordFill
    },
    {
        'title': 'Github',
        icon: RiGithubFill
    },
    {
        'title': 'Reddit',
        icon: RiRedditFill
    },
    {
        'title': 'Twitter',
        icon: RiTwitterFill,
    },
    {
        'title': 'Facebook',
        icon: RiFacebookFill,
    },
    {
        'title': 'Tiktok',
        icon: FaTiktok,
    },
    {
        'title': 'Youtube',
        icon: FaYoutube,
    },
    {
        'title': 'Instagram',
        icon: FaInstagram,
    },
]

export default function Footer() {
    return (
        <StyledFooter className="bottom-0 w-full bg-darkest-blue py-16">
            <div className="container">

                <p>dao-dream.com</p>

                <StyledSocials className="mt-10">
                    {socials.map((item, index) => (
                        <StyledSocial key={index}>
                            <item.icon/>
                            <span>{item.title}</span>
                        </StyledSocial>
                    ))}
                </StyledSocials>
            </div>
            <div className="w-full py-5 border-t border-border bg-transparent">
                <div className="container">
                    <StyleBottomText>
                        © 2023 givedream.io. All rights reserved.
                    </StyleBottomText>
                </div>
            </div>
        </StyledFooter>
    );
}
