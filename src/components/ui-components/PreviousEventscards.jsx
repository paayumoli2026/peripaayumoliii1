import React from "react";
import styled from "styled-components";
import img1 from "../../assets/eventphotos/CDS08883.JPG";
import img2 from "../../assets/eventphotos/CDS08906.JPG";
import img3 from "../../assets/eventphotos/CDS08942.JPG";
import img4 from "../../assets/eventphotos/CDS08969.JPG";

// Add your previous event images here.
// You can use local imports or external URLs.
const eventImages = [
    {
        title: "The Great Galala vol.2",
        src: img1,
    },
    {
        title: "The Great Galala vol.2",
        src: img2,
    },
    {
        title: "The Great Galala vol.2",
        src: img3,
    },
    {
        title: "The Great Galala vol.2",
        src: img4,
    },
];

const PreviousEventscards = () => {
    return (
        <StyledWrapper>
            <div className="slider">
                <div className="list">
                    {/* Double the list for seamless infinite loop */}
                    {[...eventImages, ...eventImages].map((img, index) => (
                        <div key={index} className="item group">
                            <div className="event-card">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="event-img"
                                />
                                <div className="overlay">
                                    <span>{img.title}</span>
                                </div>
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
    gap: 24px;
    width: fit-content;
    animation: marquee 35s linear infinite;
  }

  .slider:hover .list {
    animation-play-state: paused;
  }

  .slider .item {
    flex: 0 0 320px;
    height: 200px;
  }

  .event-card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
  }

  .event-card:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
  }

  .event-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  .event-card:hover .event-img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.72), transparent);
    padding: 16px 14px 12px;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .event-card:hover .overlay {
    opacity: 1;
  }

  .overlay span {
    color: #fff;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05em;
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
      animation-duration: 22s;
      gap: 14px;
    }
    .slider .item {
      flex: 0 0 220px;
      height: 140px;
    }
  }
`;

export default PreviousEventscards;
