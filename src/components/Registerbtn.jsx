import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Registerbtn = ({ eventurl }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission behavior
    const formattedTitle = eventurl.toLowerCase().replace(/\s+/g, "-");
    navigate(`/events/${formattedTitle}`);
  };
  return (
    <StyledWrapper>
      <form action="#" className="container">
        <input
          className="input-btn"
          type="radio"
          id={`register-${eventurl}`}
          name="valueIs-radio"
          defaultChecked
        />
        <label
          className="neon-btn"
          htmlFor={`register-${eventurl}`}
          onClick={handleClick}
        >
          <span className="span" />
          <span className="txt">Register</span>
        </label>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    font-family: var(--font-heading);
    font-weight: bold;
    font-size: 1.1em;
    display: grid;
    gap: 1em;
    place-content: center;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .container input[type="radio"] {
    display: none;
  }

  .input-btn:is(:checked) + .neon-btn .span {
    inset: 2px;
    background-color: #FF9933;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255, 215, 0, 0.2) 1px,
        rgba(255, 215, 0, 0.1) 3px,
        rgba(255, 215, 0, 0.2) 5px,
        rgba(255, 215, 0, 0.1) 4px,
        transparent 0.5%
      ),
      repeating-linear-gradient(
        to left,
        #1a0505 100%,
        #1a0505 100%
      );
    box-shadow: inset 0 40px 20px #2a0a0a;
  }

  .input-btn:is(:checked) + .neon-btn .txt {
    text-shadow: 2px 4px 1px #8B0000, 2px 2px 1px #FF9933,
      0 0 20px rgba(255, 215, 0, 0.6);
    color: #FFD700;
    animation: colorchange 0.3s ease;
  }

  .input-btn:is(:checked) + .neon-btn::before {
    animation-duration: 0.6s;
  }

  .input-btn:is(:checked) + .neon-btn::after {
    animation-duration: 0.6s;
  }

  .neon-btn {
    width: 300%;
    max-width: 200px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: transparent;
    position: relative;
    overflow: hidden;
    transition: all 2s ease-in-out;
    -webkit-clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
    clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
  }

  .neon-btn .span {
    display: flex;
    -webkit-clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
    clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
    position: absolute;
    inset: 1px;
    background-color: #1a0505;
    z-index: 1;
  }

  .neon-btn .txt {
    text-align: right;
    position: relative;
    z-index: 2;
    color: #FFE5B4;
    font-size: 0.9em;
    transition: all ease-in-out 2s linear;
    text-shadow: 0px 0px 1px #FFD700, 0px 0px 1px #FF9933, 0 0 1px white;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .neon-btn::before {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 20px #8B0000;
    background-image: conic-gradient(
      #8B0000,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      #FFD700
    );
    animation: rotate 4s linear infinite -2s;
  }

  .neon-btn::after {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 10px #FFD700;
    background-image: conic-gradient(
      #FFD700,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      #FF9933
    );
    animation: rotate 4s linear infinite;
  }

  @media (max-width: 768px) {
    .neon-btn {
      height: 50px;
      max-width: 30px;
    }

    .neon-btn .txt {
      font-size: 1.25em;
    }
  }

  @media (max-width: 480px) {
    .container {
      width: 90%;
    }

    .neon-btn {
      height: 50px;
      max-width: 270px;
    }

    .neon-btn .txt {
      font-size: 1.1em;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes colorchange {
    0% {
      text-shadow: 0px 0px 0px #8B0000, 0px 0px 0px #FF9933,
        0 0 0px rgba(255, 215, 0, 0.6);
    }

    50% {
      text-shadow: -6px 5px 1px #8B0000, 5px 11px 1px #FF9933,
        0 0 20px rgba(255, 215, 0, 0.6);
    }

    to {
      text-shadow: 2px 4px 1px #8B0000, 2px 2px 1px #FF9933,
        0 0 20px rgba(255, 215, 0, 0.6);
    }
  }

  @keyframes backgroundchange {
    0% {
      background-color: transparent;
    }

    50% {
      background-color: #FF9933;
    }

    to {
      background-color: transparent;
    }
  }
`;

export default Registerbtn;
