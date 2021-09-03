import ravioli from "./../../assets/ravioli.jpg";
import gelato from "./../../assets/gelato.jpg";
import blackPasta from "./../../assets/black-pasta-scaled.jpg";
import { Image, ImagesBox, Description, BoxDescription } from "./styled";
import { Price, FoodName } from "./../../features/Menu/styled";
import { Name, Wrapper } from "../../features/About/About-partOfPage/styled";

export const Section = () => (
  <Wrapper aboutWrapper>
    <Name>Featured offers</Name>
    <Description>
      We offer a great variety of the best Italian dishes to our visitors and
      guests. Below are some of our most popular main dishes and desserts.
    </Description>
    <ImagesBox>
      <div>
        <Image src={ravioli} alt="ravioli" />
        <BoxDescription>
          <FoodName> Ravioli</FoodName>
          <Price>$ 15</Price>
        </BoxDescription>
      </div>
      <div>
        <Image src={blackPasta} alt="black pasta" />
        <BoxDescription>
          <FoodName>Black Pasta</FoodName>
          <Price>$ 19.70</Price>
        </BoxDescription>
      </div>
      <div>
        <Image lastImage src={gelato} alt="gelato" />
        <BoxDescription>
          <FoodName>Ice cream</FoodName>
          <Price>$ 8</Price>
        </BoxDescription>
      </div>
    </ImagesBox>
  </Wrapper>
);
