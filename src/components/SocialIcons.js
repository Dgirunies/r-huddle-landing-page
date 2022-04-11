import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="hhtps://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="hhtps://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="hhtps://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
