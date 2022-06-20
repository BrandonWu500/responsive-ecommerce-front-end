import styled from 'styled-components';
import Category from './Category';
import { categories } from '../data';
import { mobile } from '../responsive';

const Container = styled.ul`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  padding: 4em;
  ${mobile({
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: '1fr',
    padding: 0,
  })}
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((cat) => (
        <Category key={cat.id} cat={cat} />
      ))}
    </Container>
  );
}
