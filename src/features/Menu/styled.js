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
  background-color: ${({ theme }) => theme.colors.shark};
  margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  text-decoration: none;
  padding: 20px;
`;

export const ContainerDish = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 50px 80px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px 30px;
  }
`;
export const BoxName = styled.div`
  display: flex;
  justify-content: center;
`;

export const FoodName = styled.h2`
  font-size: 26px;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }
`;

export const Price = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.green};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
    margin-top: 16px;
  }
`;

export const FoodDescription = styled.p`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 20px;
`;
