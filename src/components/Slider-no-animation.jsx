/* import styled from 'styled-components';
import { sliderItems } from '../data';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Arrow = styled.button`
  font-size: 3rem;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background-color: rgba(0 0 0 / 0.3);
  color: white;
  z-index: 2;

  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};

  &:hover,
  &:focus {
    background-color: rgba(0 0 0 / 0.7);
  }
`;

const Carousel = styled.ul`
  height: 100%;
  position: relative;
`;

const Slide = styled.li`
  position: absolute;
  inset: 0;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.bg};
  display: ${(props) => (props.active ? 'grid' : 'none')};
`;

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 10%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  padding: 2em;
  color: white;
`;

const Title = styled.h1``;

const Desc = styled.p``;

const Btn = styled.button`
  align-self: flex-start;
  color: white;
  border: 2px solid white;
  padding: 0.5em;
  background-color: transparent;
`;

export default function Slider() {
  const [activeIdx, setActiveIdx] = useState(0);
  function handleClick(direction) {
    if (direction === 'left') {
      activeIdx > 0
        ? setActiveIdx(activeIdx - 1)
        : setActiveIdx(sliderItems.length - 1);
    } else {
      activeIdx < sliderItems.length - 1
        ? setActiveIdx(activeIdx + 1)
        : setActiveIdx(0);
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        &larr;
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        &rarr;
      </Arrow>
      <Carousel>
        {sliderItems.map((item, idx) => (
          <Slide key={item.id} bg={item.bg} active={idx === activeIdx}>
            <Img src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Btn>LEARN MORE</Btn>
            </Info>
          </Slide>
        ))}
      </Carousel>
    </Container>
  );
}
 */
