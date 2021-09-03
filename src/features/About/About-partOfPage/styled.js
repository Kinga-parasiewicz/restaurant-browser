import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  background: #efeeeb;
  margin-top: 20px;


  ${({ aboutWrapper }) =>
    aboutWrapper &&
    css`
      margin-top: 0px;
      padding:30px;
      margin-bottom: 0px;
      background-color: white;

      @media(max-width:768px){
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

    @media(max-width:768px){
     flex-direction: column;
     
    }
`;


export const Name = styled.h2`
  font-size: 40px;
  text-align: center;

  @media(max-width:768px){
    text-align: center;
    font-size: 30px;
  }
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

    @media(max-width:768px){
      max-width: 300px;
      margin: 10px auto;
    }
`;
export const DescriptionBox = styled.div`
  margin-left: 70px;
  text-align: center;

  @media(max-width:768px){
    margin-left: 0px;
    margin:10px;
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

