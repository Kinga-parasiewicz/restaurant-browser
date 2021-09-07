import styled, { css } from "styled-components";
import pasta from "./../../../assets/background.jpg";

export const Wrapper = styled.section`
  background: #efeeeb;
  margin-top: 20px;

  ${({ aboutWrapper }) =>
    aboutWrapper &&
    css`
      margin-top: 0px;
      padding: 30px;
      margin-bottom: 0px;
      background-color: white;

      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`;

export const WrapperInner = styled.div`
  padding-top: 180px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  ${({ paddingWrapper }) =>
    paddingWrapper &&
    css`
      padding-top: 50px;
    `}

  @media(max-width:768px) {
    flex-direction: column;
  }
`;

export const Name = styled.h2`
  font-size: 40px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }

  ${({ colorName }) =>
    colorName &&
    css`
      padding-top: 100px;
      font-size: 48px;
      color: white;

      @media (max-width: 768px) {
        padding-top: 60px;
      }
    `}
`;

export const DescriptionParagraph = styled.p`
  max-width: 500px;
  font-size: 19px;
  line-height: 1.5;

  ${({ primary }) =>
    primary &&
    css`
      width: 300px;
    `}

  ${({ colorDescription }) =>
    colorDescription &&
    css`
      color: white;
      max-width: 800px;
      margin: 35px auto;
      font-size: 24px;
      text-align: center;
      line-height: 1.6;
    `}

  @media(max-width:768px) {
    max-width: 300px;
    margin: 10px auto;
  }
`;
export const DescriptionBox = styled.div`
  margin-left: 70px;
  text-align: center;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin: 10px;
  }
`;

export const ImagesSvg = styled.img`
  height: 60px;
  margin-right: 8px;
`;

export const GridBox = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

export const ImagesBox = styled.div`
  display: flex;
  align-items: center;
`;
export const SubName = styled.h3`
  margin-bottom: 5px;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
`;

export const Testimonials = styled.section`
  height: 80vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    height: 100vh;
  }

  &::before {
    background-image: url(${pasta});
    background-size: cover;
    content: " ";
    height: 80vh;
    width: 100vw;
    position: absolute;
    z-index: -1;

    @media (max-width: 768px) {
      height: 100vh;
      width: 100vw;
    }
  }
`;
export const TestimonialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TestimonialImage = styled.img`
  height: 60px;
  border-radius: 50%;
  margin-top: 360px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  transform-origin: bottom 100px;
  transition: box-shadow 1s;

  ${({ otherImage }) =>
    otherImage &&
    css`
      height: 60px;
      width: 57px;
      border-radius: 50%;
    `}

  &:hover {
    box-shadow: 2px 1px 2px 1px white;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  position: absolute;

  &.active {
    display: inline-block;
  }
  &.inactive {
    display: none;
  }
`;
