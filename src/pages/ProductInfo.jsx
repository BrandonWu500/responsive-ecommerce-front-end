import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile, tablet } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2em;
  ${mobile({ gridTemplateColumns: 'auto', padding: '1em' })}
  gap: 2em;
`;
const Img = styled.img`
  height: 70vh;
  ${mobile({ height: '40vh', marginBottom: '2em' })}
  justify-self: center;
  ${tablet({ height: '50vh' })}
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;
`;
const Desc = styled.p`
  max-width: 40ch;
`;
const Price = styled.span`
  font-size: 2rem;
`;
const Filters = styled.div`
  display: flex;
  gap: 4em;
`;
const FilterWrapper = styled.div`
  display: flex;
  gap: 1em;
`;
const FilterLabel = styled.span``;
const ColorOptions = styled.div`
  display: flex;
  gap: 0.5em;
`;
const ColorOption = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  border: 1px solid gray;
`;
const Select = styled.select``;
const Option = styled.option``;
const Quantity = styled.div`
  display: flex;
  gap: 1em;
`;
const QuantityBtn = styled.button``;
const QuantityText = styled.span``;
const AddToCart = styled.button`
  align-self: flex-start;
  padding: 0.5em;
  background-color: teal;
  color: white;
  border: 0;
  border-radius: 5px;
`;

export default function ProductInfo() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Img src="images/products/shirt.png" />
        <Info>
          <Title>T-shirt</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, odio.
            Eligendi porro nemo, recusandae eum aut possimus quia veniam
            voluptate!
          </Desc>
          <Price>$20</Price>
          <Filters>
            <FilterWrapper>
              <FilterLabel>Color</FilterLabel>
              <ColorOptions>
                <ColorOption bg="white"></ColorOption>
                <ColorOption bg="blue"></ColorOption>
                <ColorOption bg="red"></ColorOption>
              </ColorOptions>
            </FilterWrapper>
            <FilterWrapper>
              <FilterLabel>Size</FilterLabel>
              <Select>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
              </Select>
            </FilterWrapper>
          </Filters>
          <Quantity>
            <QuantityBtn>-</QuantityBtn>
            <QuantityText>1</QuantityText>
            <QuantityBtn>+</QuantityBtn>
          </Quantity>
          <AddToCart>ADD TO CART</AddToCart>
        </Info>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
