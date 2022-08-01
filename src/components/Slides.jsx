import React, { useState } from "react";
import styled from "styled-components";
import slides from "../data/slidesData";

function Slides() {
  const [currentSlide, setSlide] = useState(0);
  return (
    <div>
      <ButtonsContainer id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className={currentSlide === 0 ? "small outlined" : "small"}
          disabled={currentSlide === 0}
          onClick={() => setSlide(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className={currentSlide === 0 ? "small outlined" : "small"}
          disabled={currentSlide === 0}
          onClick={() => setSlide(currentSlide - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className={
            currentSlide === slides.length - 1 ? "small outlined" : "small"
          }
          disabled={currentSlide === slides.length - 1}
          onClick={() => setSlide(currentSlide + 1)}
        >
          Next
        </button>
      </ButtonsContainer>
      <SlidesContainer id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </SlidesContainer>
    </div>
  );
}

export default Slides;

const ButtonsContainer = styled.div`
  width: 35rem;
  display: flex;
  justify-content: space-evenly;
  margin: 4rem auto;
  padding: 1rem 0;

  button {
    background: #239c23;
    padding: 0.7rem 1.4rem;
    border: none;
    &:disabled {
      background: #7feb7f;
    }
  }
  .small {
    padding: 0.6rem 1.3rem;
  }
  .outlined {
    outline: 2px solid #239c23;
  }
`;

const SlidesContainer = styled.div`
  width: 45rem;
  height: 22rem;
  margin: 0 auto;
  padding: 3.5rem 0;
  box-shadow: 0px 0px 10px 1px;
  text-align: center;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
