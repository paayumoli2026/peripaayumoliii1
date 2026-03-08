import React from "react";
import styled from "styled-components";
import gtec from "../../assets/gtec.png";
import beast from "../../assets/beast.png";
import edmis from "../../assets/EDMIS.png";
import caddshool from "../../assets/caddschool.png";
import creatorspacelab from "../../assets/creatorspacelab.png";
import jass from "../../assets/jass.png";

const sponsors = [
  { title: "Image 1", src: gtec },
  { title: "Image 2", src: beast },
  { title: "Image 3", src: edmis },
  { title: "Image 4", src: caddshool },
  { title: "Image 5", src: creatorspacelab },
  { title: "Image 6", src: jass },
];

const Sponsorscards = () => {
  return (
    <StyledWrapper>
      <div className="slider">
        <div className="list">
          {/* Double the list for seamless infinite loop */}
          {[...sponsors, ...sponsors].map((img, index) => (
            <div key={index} className="item group">
              <div className="glass-card p-6 w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-10px_rgba(255,98,0,0.45)]">
                <img
                  src={img.src}
                  alt={`Sponsor ${index}`}
                  className="max-w-[120px] max-h-[60px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .slider {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
  }

  .slider .list {
    display: flex;
    gap: 40px;
    width: fit-content;
    animation: marquee 40s linear infinite;
  }

  .slider:hover .list {
    animation-play-state: paused;
  }

  .slider .item {
    flex: 0 0 240px;
    height: 120px;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    .slider .list {
      animation-duration: 25s;
      gap: 20px;
    }
    .slider .item {
      flex: 0 0 180px;
      height: 90px;
    }
  }
`;

export default Sponsorscards;
