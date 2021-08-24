import { Wrapper, WrapperInner, Name, Description, DescriptionBox } from "./styled";
import restaurant from "./../../assets/restaurant.jpg";
import { StyledButton } from "./../../common/Button";

export const About = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <img src={restaurant} alt="restaurant" />
        <DescriptionBox>
          <Name>About Us</Name>
          <Description>
            Anolini is a family owned and operated Italian Restaurant offering a
            combination of fresh ingredients and authentic Italian cooking. We
            will make sure you are served the most authentic and fresh Italian
            dishes, while offering the best customer service. Our kitchen is
            committed to providing our guests with the best Italian Cuisine.
          </Description>
          <StyledButton background >Read more</StyledButton>
        </DescriptionBox>
      </WrapperInner>
    </Wrapper>
  );
};
