import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Container = styled.div`
  height: minmax(100px, 20vh);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  padding: 2em;
  justify-items: center;
  ${mobile({
    gridTemplateColumns: '1fr',
    textAlign: 'center',
  })}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const LogoTitle = styled.h2``;
const Desc = styled.p`
  font-size: 0.8rem;
  max-width: 40ch;
  line-height: 1.5;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 1em;
  ${mobile({ justifyContent: 'center' })}
`;
const SocialIcon = styled.button`
  border: 0;
  border-radius: 50%;
  padding: 0.5em;
  background-color: ${(props) => props.bg};
  color: white;
`;

const Center = styled.div`
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3``;
const UsefulLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  margin-top: 1em;
`;
const UsefulLink = styled.li``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ContactInfo = styled.span``;

export default function Footer() {
  return (
    <Container>
      <Left>
        <LogoTitle>SHOP</LogoTitle>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          voluptates rerum sit ratione illum sapiente officiis perferendis
          libero dignissimos vitae.
        </Desc>
        <SocialIcons>
          <SocialIcon bg="royalblue">
            <FacebookIcon fontSize="small" />
          </SocialIcon>
          <SocialIcon bg="skyblue">
            <TwitterIcon fontSize="small" />
          </SocialIcon>
          <SocialIcon bg="hotpink">
            <InstagramIcon fontSize="small" />
          </SocialIcon>
        </SocialIcons>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <UsefulLinks>
          <UsefulLink>Home</UsefulLink>
          <UsefulLink>Men's Fashion</UsefulLink>
          <UsefulLink>Accessories</UsefulLink>
          <UsefulLink>Order Tracking</UsefulLink>
          <UsefulLink>Wishlist</UsefulLink>
          <UsefulLink>Cart</UsefulLink>
          <UsefulLink>Women's Fashion</UsefulLink>
          <UsefulLink>My Account</UsefulLink>
          <UsefulLink>Terms and Conditions</UsefulLink>
        </UsefulLinks>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon />
          <ContactInfo>123 Shopping Lane, Boston, MA</ContactInfo>
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          <ContactInfo>+1 123 456 7890</ContactInfo>
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          <ContactInfo>contact@shop.com</ContactInfo>
        </ContactItem>
      </Right>
    </Container>
  );
}
