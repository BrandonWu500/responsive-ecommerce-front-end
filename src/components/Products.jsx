import Product from './Product';
import { popularProducts } from '../data';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1em;
  padding: 2em;
  ${mobile({ padding: '1em' })}
`;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
}
