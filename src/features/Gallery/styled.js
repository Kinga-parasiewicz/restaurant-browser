import styled from "styled-components";

export const BoxContent = styled.img`
  max-width: 400px;
  transition: transform 1s;
  margin-right: 4px;

  &:hover {
    box-shadow: 2px 2px 20px 2px green;
    transform: scale(1.4);

    @media (max-width: 767px) {
      transform: scale(1);
      box-shadow: none;
    }
  }

  @media (max-width: 767px) {
    max-width: 310px;
    margin-top: 8px;
  }
`;

export const BoxImages = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 120px auto;
`;
