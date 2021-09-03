import styled from "styled-components";

export const WrapperMenu = styled.div`
  margin-top: 160px;
  margin-bottom: 120px;
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #323539;
  margin: 0px;
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  text-decoration: none;
  padding: 20px;
`;

export const ContainerDish = styled.div`
  background: white;
  padding: 50px 80px;
  text-align: center;
`;
export const BoxName = styled.div`
  display: flex;
  justify-content: center;
`;

export const FoodName = styled.h2`
  font-size: 26px;
  margin-right: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Price = styled.h3`
  font-size: 24px;
  color: green;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top:16px;
  }
`;

export const FoodDescription = styled.p`
  color: #3e3c3c;
  font-size: 20px;
`;
