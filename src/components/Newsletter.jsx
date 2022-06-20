import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  gap: 1em;
  height: 60vh;
  background-color: peachpuff;
`;
const Title = styled.h1`
  font-size: 4rem;
  ${mobile({ fontSize: '3rem' })}
`;
const Desc = styled.div`
  max-width: 40ch;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 8fr 1fr;
  border: 2px solid lightgray;
`;
const Input = styled.input`
  padding: 0.5em;
  border: 0;
  font-size: 1rem;
`;
const Btn = styled.button`
  background-color: teal;
  color: white;
  border: 0;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <Form>
        <Input placeholder="Your email..." />
        <Btn>
          <SendIcon />
        </Btn>
      </Form>
    </Container>
  );
}
