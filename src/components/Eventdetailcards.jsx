import React from "react";
import styled from "styled-components";
import Registerbtn from "./Registerbtn";

const Eventdetailscard = ({ image, title, url }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="input-container">
          <div className="input-content">
            <div className="input-dist">
              <div className="image-holder">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h2 className="title">{title}</h2>
              <Registerbtn eventurl={url} />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0px;

  .container {
    font-family: var(--font-body);
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    max-width: 400px;
    min-width: 400px; /* Fixed width */
    width: 100%;
  }

  .input-container {
    filter: drop-shadow(10px 10px 15px rgba(255, 215, 0, 0.4))
      drop-shadow(-10px -10px 15px rgba(255, 153, 51, 0.4));
    animation: blinkShadowsFilter 8s ease-in infinite;
  }

  .input-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1em;
  }

  .input-dist {
    z-index: 80;
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 1em;
  }

  .image-holder img {
    width: 100%;
    max-width: 350px;
    height: 250px; /* Fixed height */
    border-radius: 10px;
    border: 2px solid var(--color-gold);
    object-fit: cover; /* Prevents stretching */
  }

  .title {
    font-size: 1.5rem;
    color: var(--color-gold);
    margin-top: 10px;
    font-family: var(--font-heading);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @keyframes blinkShadowsFilter {
    0%,
    100% {
      filter: drop-shadow(10px 10px 15px rgba(255, 215, 0, 0.6))
        drop-shadow(-10px -10px 15px rgba(139, 0, 0, 0.6));
    }
    50% {
      filter: drop-shadow(10px -10px 15px rgba(255, 153, 51, 0.8))
        drop-shadow(-10px 10px 15px rgba(139, 0, 0, 0.8));
    }
  }
`;

export default React.memo(Eventdetailscard);
