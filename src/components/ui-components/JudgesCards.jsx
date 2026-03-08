import React from "react";
import styled from "styled-components";
import image1 from "../../assets/judges/image1.png";
import image2 from "../../assets/judges/image2.png";
import image3 from "../../assets/judges/image3.png";
import image4 from "../../assets/judges/image4.png";
import image5 from "../../assets/judges/image5.png";
import image6 from "../../assets/judges/image6.png";
import image7 from "../../assets/judges/image7.png";
import image8 from "../../assets/judges/image8.png";
import image9 from "../../assets/judges/image9.png";
import image10 from "../../assets/judges/image10.png";
import image11 from "../../assets/judges/image11.png";

const judges = [
  { id: 1, name: "EMCEE GAUTHAM", role: "ANCHOR", photo: image1 },
  { id: 2, name: "Mr. Udhay Kannan", role: "Duo Singing", photo: image2 },
  { id: 3, name: "SriVidhya Santhosh", role: "adaptune", photo: image3 },
  { id: 4, name: "Ms. Keerthy Sampath ", role: "Fashion Show/ Cosplay", photo: image4 },
  { id: 5, name: "Mr. Joshua Maxwel", role: "Fashion Show/ Cosplay", photo: image5 },
  { id: 6, name: "i.vanxhh", role: "Fashion Show/ Cosplay", photo: image6 },
  { id: 7, name: "Rajesh", role: "Group Dance/Solo Dance/ Dance Battel", photo: image7 },
  { id: 8, name: "CHRISTY", role: "Battle Of Bands", photo: image8 },
  { id: 9, name: "Mr. Balaji", role: "Muscle Mafia", photo: image9 },
  { id: 10, name: "", role: "Mime", photo: image10 },
  { id: 11, name: "", role: "DJ", photo: image11 },
];

const JudgesCards = () => {
  if (!judges.length) return null;

  return (
    <StyledWrapper>
      <div className="slider">
        <div className="list">
          {[...judges, ...judges].map((judge, index) => (
            <div key={`${judge.id}-${index}`} className="item">
              <article className="judge-card">
                <div className="judge-image-wrap">
                  <img
                    src={judge.photo}
                    alt={judge.name}
                    className={`judge-img ${judge.id === 7 ? "judge-img--rajesh" : ""}`}
                  />
                </div>
                <div className="judge-details">
                  <h3>{judge.name}</h3>
                  <p>{judge.role}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .slider {
    --card-bg: linear-gradient(160deg, rgba(23, 10, 6, 0.92), rgba(10, 5, 4, 0.9));
    --border: rgba(255, 146, 76, 0.34);
    --border-hover: rgba(255, 164, 94, 0.62);
    --text-main: #ffe0be;
    --text-muted: #ffd1a1;
    --badge-bg: rgba(255, 110, 36, 0.14);
    --badge-border: rgba(255, 153, 82, 0.36);
    --shadow: 0 16px 38px rgba(0, 0, 0, 0.48);
    --shadow-hover: 0 24px 52px rgba(0, 0, 0, 0.6);

    width: 100%;
    overflow: hidden;
    padding: 30px 0;
    position: relative;
  }

  .slider::before,
  .slider::after {
    display: none;
  }

  .slider .list {
    display: flex;
    gap: 22px;
    width: fit-content;
    animation: marquee 36s linear infinite;
  }

  .slider:hover .list {
    animation-play-state: paused;
  }

  .slider .item {
    flex: 0 0 230px;
    height: 355px;
  }

  .judge-card {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--card-bg);
    box-shadow: var(--shadow);
    position: relative;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    cursor: pointer;
  }

  .judge-card::before {
    content: "";
    position: absolute;
    inset: -25% -15% auto auto;
    width: 70%;
    height: 52%;
    background: radial-gradient(circle, rgba(255, 114, 19, 0.22), transparent 65%);
    pointer-events: none;
    z-index: 0;
  }

  .judge-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: var(--border-hover);
  }

  .judge-image-wrap {
    width: 100%;
    height: 258px;
    overflow: hidden;
    position: relative;
    background: #120806;
    z-index: 1;
  }

  .judge-image-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 58%, rgba(8, 4, 3, 0.76));
    pointer-events: none;
  }

  .judge-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.45s ease;
  }

  .judge-img--rajesh {
    object-position: center top;
  }

  .judge-card:hover .judge-img {
    transform: scale(1.08);
  }

  .judge-details {
    text-align: center;
    padding: 14px 12px 16px;
    color: var(--text-main);
    position: relative;
    z-index: 1;
  }

  .judge-details h3 {
    font-size: 0.9rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin: 0;
  }

  .judge-details p {
    margin: 8px auto 0;
    width: fit-content;
    max-width: 100%;
    padding: 5px 10px;
    border-radius: 999px;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--badge-bg);
    border: 1px solid var(--badge-border);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    .slider {
      padding: 22px 0;
    }

    .slider::before,
    .slider::after {
      width: 34px;
    }

    .slider .list {
      animation-duration: 24s;
      gap: 14px;
    }

    .slider .item {
      flex: 0 0 182px;
      height: 304px;
    }

    .judge-image-wrap {
      height: 210px;
    }

    .judge-details {
      padding: 12px 10px 14px;
    }

    .judge-details h3 {
      font-size: 0.78rem;
    }

    .judge-details p {
      font-size: 0.62rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .slider .list {
      animation: none;
    }

    .judge-card,
    .judge-img {
      transition: none;
    }
  }
`;

export default JudgesCards;

