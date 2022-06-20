import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
import { useEffect, useRef, useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.button`
  padding: 1em;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};
  margin: auto;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  z-index: 2;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const Slides = styled.ul`
  transform: translateX(${(props) => props.slideIdx * -100}vw);
  transition: transform 1s ease;
  position: relative;
`;

const Slide = styled.li`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.bg};
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.id - 1) * 100}vw;
`;

const Image = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 10%;
  background-color: inherit;
`;

const Info = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  color: white;
  background-color: inherit;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Desc = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  max-width: 40ch;
`;

const MoreBtn = styled.button`
  align-self: start;
  padding: 0.5em;
  color: coral;
  background-color: white;
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
`;

const SlidesNav = styled.ul`
  background-color: #ffffff88;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  z-index: 2;
  position: absolute;
  bottom: 1em;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  border-radius: 100vh;
`;
const Dot = styled.li``;
const DotBtn = styled.button`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? 'rgba(0 0 0 / 0.8)' : 'rgba(0 0 0 / 0.3)'};
  border: 0;
`;

export default function Slider() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [clicked, setClicked] = useState(false);
  const handleArrowClick = (direction) => {
    setClicked(true);
    changeSlide(direction);
  };
  const handleDotClick = (idx) => {
    setClicked(true);
    setSlideIdx(idx);
  };
  const changeSlide = (direction) => {
    if (direction === 'left') {
      setSlideIdx(slideIdx > 0 ? slideIdx - 1 : sliderItems.length - 1);
    } else {
      setSlideIdx(slideIdx < sliderItems.length - 1 ? slideIdx + 1 : 0);
    }
  };

  const autoplayRef = useRef();

  useEffect(() => {
    autoplayRef.current = () => changeSlide('right');
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    let interval;
    if (!clicked) {
      interval = setInterval(play, 8000);
      return () => clearInterval(interval);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [clicked]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleArrowClick('left')}>
        <ArrowLeftIcon fontSize="large" />
      </Arrow>
      <Arrow direction="right" onClick={() => handleArrowClick('right')}>
        <ArrowRightIcon fontSize="large" />
      </Arrow>
      <Slides slideIdx={slideIdx}>
        {sliderItems.map((slide) => (
          <Slide key={slide.id} bg={slide.bg} id={slide.id}>
            <Image src={slide.img} />
            <Info>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <MoreBtn>LEARN MORE</MoreBtn>
            </Info>
          </Slide>
        ))}
      </Slides>
      <SlidesNav>
        {sliderItems.map((slide) => (
          <Dot key={slide.id}>
            <DotBtn
              active={slide.id - 1 === slideIdx}
              onClick={() => handleDotClick(slide.id - 1)}
            ></DotBtn>
          </Dot>
        ))}
      </SlidesNav>
    </Container>
  );
}
