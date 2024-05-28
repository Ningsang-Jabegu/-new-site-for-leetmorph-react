import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              At Leetmorph Technology Pvt. Ltd, we take pride in our work
              and the solutions we provide. Our portfolio is a testament to
              our commitment to excellence and innovation. <br />
              Here are some highlights from our collection of awesome projects:
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Fastblur Production"
                text="An animation agency in Nepal, specializing in 2D animation."
                // action={{}}
                webLink="https://fastblurpro.com/"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="KYTCS"
                text="Social not for profit organization working on connecting Chobegu/Jabegu community"
                // action={{}}
                webLink="https://chobegusajumlung.org.np/"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Xi International"
                text="An educational consultancy helping to upskill the academic journey of students."
                // action={{}}
                webLink="#"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Ninestars"
                text=" Team of talented designers making websites with Bootstrap"
                // action={{}}
                webLink="https://leetmorph.vercel.app/"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="NPAC"
                text="They are Nogen Pharmacy And Clinic group promoting and selling medicines online."
                // action={{}}
                webLink="https://npac.com.np/"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Ecothaili"
                text="A BioPlastic company which manifactures banana baed plastic"
                // action={{}}
                webLink="https://ecothaili.vercel.app/"
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Here’s what we offer:
              </p>
              <ol className="numBullet font12">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Social Media Handling</li>
                <li>Video Production & Editing</li>
                <li>Graphic Designing & other IT services</li>
              </ol>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                    <FullButton title="Learn More" />
                  </Link>
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                    <FullButton title="Contact Us" border />
                  </Link>
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
