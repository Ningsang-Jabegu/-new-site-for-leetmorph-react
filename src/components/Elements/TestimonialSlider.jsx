import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Leetmorph’s team of web developers transformed our online presence. Their attention to detail and technical prowess are unmatched."
            author="Ralph Waldo Emerson, CEO at Iconic Media Corporation"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We partnered with Leetmorph for our mobile app project. Their agile approach and seamless communication made the development process a breeze."
            author="Jane Smith, CTO at Texas Innovations"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Leetmorph’s social media team boosted our brand visibility. Their creative content and strategic campaigns have significantly impacted our audience engagement."
            author="David Johnson, Marketing Manager at Ceen Enterprises"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="From concept to final edit, Leetmorph delivered captivating videos that resonate with our audience. Their video production team is truly exceptional."
            author="Emily Brown, Creative Director at Purdo Studios"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
