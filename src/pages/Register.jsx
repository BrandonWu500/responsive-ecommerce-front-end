import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end;
  padding-right: 4em; */
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(255 255 255 / 0.5), rgba(255 255 255 / 0.5)),
    url('images/people/7.jpg') left;
  background-size: cover;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 500px;
  ${mobile({ maxWidth: '300px', gridTemplateColumns: '1fr' })}
  gap: 1em;
  padding: 2em;
  background-color: white;
`;
const Title = styled.h2`
  grid-column: span 2;
  ${mobile({ gridColumn: 'auto' })}
`;
const Input = styled.input`
  padding: 0.5em;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const Span = styled.span`
  grid-column: span 2;
  ${mobile({ gridColumn: 'auto' })}
`;
const Btn = styled.button`
  grid-column: span 2;
  ${mobile({ gridColumn: 'auto' })}

  padding: 1em;
  background-color: teal;
  color: white;
  border: 0;
`;

export default function Register() {
  return (
    <Container>
      <Form>
        <Title>CREATE AN ACCOUNT</Title>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Username" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Span>
          By creating an account, I consent to the proccessing of my personal
          data in accordance with the <strong>Privacy Policy</strong>
        </Span>
        <Btn type="submit">SIGN UP</Btn>
      </Form>
    </Container>
  );
}
