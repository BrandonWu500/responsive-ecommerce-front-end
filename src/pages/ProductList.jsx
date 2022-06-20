import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 1em 4em 0;
  ${mobile({ padding: '1em' })}
`;
const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  gap: 1em;
  ${mobile({ flexDirection: 'column' })}
`;

const Title = styled.h2`
  margin-bottom: 0.5em;
`;
const Subtitle = styled.h3``;
const Select = styled.select``;
const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Shirts</Title>
        <FilterWrapper>
          <Filter>
            <Subtitle>Filter Products:</Subtitle>
            <Select>
              <Option>White</Option>
              <Option>Blue</Option>
              <Option>Red</Option>
            </Select>
            <Select>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
            </Select>
          </Filter>
          <Filter>
            <Subtitle>Sort Products:</Subtitle>
            <Select>
              <Option>Price (ascending)</Option>
              <Option>Price (descending)</Option>
              <Option>Newest</Option>
              <Option>Most Popular</Option>
            </Select>
          </Filter>
        </FilterWrapper>
      </Wrapper>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
