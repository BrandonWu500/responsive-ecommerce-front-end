import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  z-index: 2;
  opacity: 0;
  background-color: rgba(0 0 0 / 0.3);
`;

const Container = styled.li`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: skyblue;
  padding: 1em;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 2em;
`;

const Image = styled.img`
  object-fit: contain;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const Btn = styled.button`
  background-color: white;
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`;

export default function Product({ product }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={product.img} />
      </ImageContainer>
      <Overlay>
        <Btns>
          <Btn>
            <ShoppingCartOutlinedIcon />
          </Btn>
          <Link to="/product">
            <Btn>
              <SearchOutlinedIcon />
            </Btn>
          </Link>
          <Btn>
            <FavoriteBorderOutlinedIcon />
          </Btn>
        </Btns>
      </Overlay>
    </Container>
  );
}
