import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptas id sapiente ipsam odio beatae, consequatur quo quasi
            praesentium porro distinctio incidunt aliquam ullam impedit quia ex
            numquam vitae aliquid!
            <li></li>
            <li>+244 948 766 894</li>
            <li>erineu16@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What we Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
