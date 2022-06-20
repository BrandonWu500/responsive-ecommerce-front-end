import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import { mobile, smallMobile } from '../responsive';

const Container = styled.div``;
const CartContainer = styled.div`
  padding: 1em 4em;
  ${smallMobile({ padding: '1em' })}

  display: grid;
  grid-template-columns: 3fr 1fr;
  ${smallMobile({ display: 'flex', flexDirection: 'column' })}

  gap: 2em;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 300;
  grid-column: span 2;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: span 2;
  ${mobile({ justifyContent: 'center', gap: '1em' })}
`;
const PrimaryBtn = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 0.5em;
`;
const CartLinks = styled.div`
  display: flex;
  gap: 2em;
`;
const CartLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${mobile({ gridTemplateColumns: 'auto', gap: '2em' })}

  padding-bottom: 2em;
  border-bottom: 1px solid gray;
`;
const ProductLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1em;
`;
const Img = styled.img`
  width: 10rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const InfoItem = styled.div``;
const ColorCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.bg};
  border: 1px solid gray;
  border-radius: 50%;
`;
const ProductRight = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2em;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: 'row', justifyContent: 'space-around' })}
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const NumberInput = styled.input`
  width: 3rem;
  font-size: 1rem;
`;
const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
`;
const Price = styled.span`
  font-size: 1.5rem;
`;
const Summary = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
  border: 1px solid gray;
  padding: 2em;
`;
const SummaryTitle = styled.h2`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  font-size: ${(props) => (props.total ? '1.5rem' : '0.9rem')};
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.total && '500'};
`;
const SummaryItemName = styled.span``;
const SummaryItemVal = styled.span``;
const AccentBtn = styled.button`
  background-color: black;
  color: white;
  padding: 1em;
`;

export default function Cart() {
  return (
    <Container>
      <Navbar />
      <CartContainer>
        <Title>YOUR CART</Title>
        <Wrapper>
          <PrimaryBtn>CONTINUE SHOPPING</PrimaryBtn>
          <CartLinks>
            <CartLink>Your Wishlist (0)</CartLink>
          </CartLinks>
        </Wrapper>
        <Products>
          <Product>
            <ProductLeft>
              <Img src="images/products/shoes.png" />
              <Info>
                <InfoItem>
                  <strong>Product:</strong> SHOES
                </InfoItem>
                <InfoItem>
                  <strong>ID:</strong> 123
                </InfoItem>
                <InfoItem>
                  <ColorCircle bg="green"></ColorCircle>
                </InfoItem>
                <InfoItem>
                  <strong>Size:</strong> 10
                </InfoItem>
              </Info>
            </ProductLeft>
            <ProductRight>
              <InputContainer>
                <Label>Quantity</Label>
                <NumberInput type="number" defaultValue="2" min="1" />
              </InputContainer>

              <Price>$30</Price>
            </ProductRight>
          </Product>
          <Product>
            <ProductLeft>
              <Img src="images/products/shirt.png" />
              <Info>
                <InfoItem>
                  <strong>Product:</strong> T-SHIRT
                </InfoItem>
                <InfoItem>
                  <strong>ID:</strong> 324
                </InfoItem>
                <InfoItem>
                  <ColorCircle bg="white"></ColorCircle>
                </InfoItem>
                <InfoItem>
                  <strong>Size:</strong> M
                </InfoItem>
              </Info>
            </ProductLeft>
            <ProductRight>
              <InputContainer>
                <Label>Quantity</Label>
                <NumberInput type="number" defaultValue="1" min="1" />
              </InputContainer>
              <Price>$20</Price>
            </ProductRight>
          </Product>
        </Products>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemName>Subtotal</SummaryItemName>
            <SummaryItemVal>$80</SummaryItemVal>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemName>Estimated Shipping</SummaryItemName>
            <SummaryItemVal>$7</SummaryItemVal>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemName>Discount</SummaryItemName>
            <SummaryItemVal>- $20</SummaryItemVal>
          </SummaryItem>
          <SummaryItem total>
            <SummaryItemName>Total</SummaryItemName>
            <SummaryItemVal>$67</SummaryItemVal>
          </SummaryItem>
          <AccentBtn>CHECKOUT NOW</AccentBtn>
        </Summary>
      </CartContainer>
      <Footer />
    </Container>
  );
}
