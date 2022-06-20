import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.li`
  height: 100%;
`;

const Info = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: 25% 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
`;
const Title = styled.h1`
  color: white;
  text-shadow: 0px 0px 5px black;
`;
const Btn = styled.button`
  background-color: white;
  color: gray;
  padding: 0.5em;
  font-weight: 600;
  font-size: 1rem;
  border: 0;
  box-shadow: 0px 0px 5px rgba(0 0 0 / 0.5);
`;

export default function Category({ cat }) {
  return (
    <Container>
      <Info bg={cat.img}>
        <Title>{cat.title}</Title>
        <Link to="/products">
          <Btn>SHOP NOW</Btn>
        </Link>
      </Info>
    </Container>
  );
}
