import "./styles.css";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SmsIcon from "@material-ui/icons/Sms";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";

export const socials = [
  {
    outlet: "LinkedIn",
    href:
      "https://www.linkedin.com/shareArticle?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&title=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React",
    background: "#0a66c2",
    color: "white",
    label: "Share on LinkedIn",
    icon: <LinkedInIcon />
  },
  {
    outlet: "Facebook",
    href:
      "https://www.facebook.com/sharer.php?u=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig",
    background: "#3b5898",
    color: "white",
    label: "Share on Facebook",
    icon: <FacebookIcon />
  },
  {
    outlet: "Twitter",
    href:
      "https://twitter.com/intent/tweet?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&text=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React&via=dannysasse",
    background: "#00aced",
    color: "white",
    label: "Share on Twitter",
    icon: <TwitterIcon />
  },
  {
    outlet: "Email",
    href:
      "mailto:?subject=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React&body=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig%20Check%20out%20this%20new%20article%20on%20Jest%20testing%20in%20React!",
    background: "#dd4b39",
    color: "white",
    label: "Share via Email",
    icon: <MailOutlineIcon />
  },
  {
    outlet: "SMS",
    href:
      "sms:?body=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig",
    background: "#7bcb20",
    color: "white",
    label: "Share via SMS",
    icon: <SmsIcon />
  }
];

export default function App() {
  const [menuActive, setMenuActive] = useState(false);
  const handleToggleMenu = () => {
    setMenuActive((menuActive) => !menuActive);
  };

  const socialLinks = socials.map((social, index) => {
    return (
      <SocialLink
        as="a"
        href={social.href}
        target="_blank"
        rel="noreferrer"
        aria-label={social.label}
        role="button"
        isActive={menuActive}
        background={social.background}
        color={social.color}
        position={index}
        key={index}
      >
        {social.icon}
      </SocialLink>
    );
  });

  return (
    <Container>
      <h1>Share Feature Implementation</h1>
      <h2>By: Danny Sasse</h2>
      <ShareContainer>
        <ShareButton
          isActive={menuActive}
          aria-label="Share Button"
          aria-expanded={menuActive}
          role="button"
          background="#242424"
          color="white"
          onClick={handleToggleMenu}
        >
          <ShareIcon />
        </ShareButton>
        {socialLinks}
      </ShareContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: mistyrose;
  height: 100vh;
`;

const ShareContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShareButton = styled.button`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 100%;
  outline: none;
  border: 2px solid ${({ background }) => background};
  padding: 8px;
  transform: ${({ isActive }) => (isActive ? "scale(0.8)" : "scale(1.0)")};
  transition: all 0.2s, transform 0.2s 0.2s;
  :hover {
    background: white;
    color: ${({ background }) => background};
  }
`;

const SocialLink = styled(ShareButton)`
  position: absolute;
  z-index: 0;
  transform: none;
  transition: top 0.2s ${({ position }) => `${position * 50}ms`},
    left 0.2s ${({ position }) => `${position * 50}ms`};
  left: ${({ isActive, position }) =>
    isActive ? `${(-1) ** position * Math.ceil(position / 2) * 50}px` : "0"};
  top: ${({ isActive }) => (isActive ? `50px` : "0")};
  box-shadow: ${({ isActive }) => (isActive ? `0 4px 10px 0 gray` : `0`)};
  ;