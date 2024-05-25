import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action, webLink }) {
  const handleIconClick = () => {
    if (webLink === "#") {
      alert(`${title}'s website link is not set yet`);
    } else {
      window.open(webLink, "new-page");
    }
  };

  return (
    <Wrapper>
      <ImgBtn className="animate" onClick={action ? () => action() : null}>
        <ImgBackdrop className="radius8">
          <ImgBckdropIcon className="icon radius8">
            <EyeIcon 
              className="fa-regular fa-eye pointer icon" 
              onClick={handleIconClick}
            ></EyeIcon>
          </ImgBckdropIcon>
          <img className="radius8" src={img} alt={title}></img>
        </ImgBackdrop>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const EyeIcon = styled.i`
  color: rgba(255, 255, 255, 0.5);
  font-size: 25pt;
  transition: color 0.4s ease;
  background: transparent;
  &:hover {
    color: rgba(255, 255, 255, 1);
    background: transparent !important;
  }
`;

const ImgBckdropIcon = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    padding-bottom: 10px;
  }
`;

const ImgBackdrop = styled.div`
  position: relative;
  z-index: 1;
  transition: background-color 0.4s ease, opacity 0.4s ease;
  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  position: relative;
  margin: 20px 0px;
  :hover .icon {
    opacity: 1;
  }
`;
