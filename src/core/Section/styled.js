import styled, { css } from "styled-components";

export const Image = styled.img`
  max-width: 400px;

  @media (max-width: 1024px) {
    max-width: 260px;
  }

  ${({ aboutImage }) =>
    aboutImage &&
    css`
      max-width: 750px;

      @media (max-width: 1024px) {
        height: 400px;
      }

      @media (max-width: 767px) {
        display: none;
      }
    `}

  ${({ lastImage }) =>
    lastImage &&
    css`
      max-width: 355px;

      @media (max-width: 1024px) {
        max-width: 230px;
      }
    `}
`;

export const ImagesBox = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #71726e;
  margin: 30px;

  ${({ sentence }) =>
    sentence &&
    css`
      font-size: 25px;
      margin: 0px;
      max-width: 500px;
    `}

  ${({ forAbout }) =>
    forAbout &&
    css`
      text-align: left;
      margin: 5px 0 20px 5px;
      font-weight: 100;
    `}

    @media(max-width:768px) {
    justify-content: center;
    margin: 0 auto;
  }

  ${({ forForm }) =>
    forForm &&
    css`
      text-align: center;
      margin: 5px 0 10px 5px;
      font-weight: 100;
    `}
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
