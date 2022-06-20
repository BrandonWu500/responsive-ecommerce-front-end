import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end;
padding-right: 4em; */
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('images/people/6.jpg') left bottom;
  background-size: cover;
`;
const Form = styled.form`
  padding: 2em;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Title = styled.h2``;
const Input = styled.input`
  font-size: 1rem;
  padding: 0.5em;
  font-family: Arial, Helvetica, sans-serif;
`;
const Btn = styled.button`
  padding: 1em;
  background-color: teal;
  color: white;
  border: 0;
`;
const Span = styled.span``;

export default function Login() {
  return (
    <Container>
      <Form>
        <Title>SIGN IN</Title>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Btn type="submit">LOGIN</Btn>
        <Span>FORGOT PASSWORD?</Span>
        <Span>CREATE A NEW ACCOUNT </Span>
      </Form>
    </Container>
  );
}
