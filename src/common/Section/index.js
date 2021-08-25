import ravioli from "./../../assets/ravioli.jpg";
import gelato from "./../../assets/gelato.jpg";
import blackPasta from "./../../assets/black-pasta-scaled.jpg";
import {
  Image,
  ImagesBox,
  Wrapper,
  LastImage,
  Description,
  NameImages,
} from "./styled";
import { Name } from "./../../features/About/styled";

export const Section = () => (
  <Wrapper>
    <Name>Featured offers</Name>
    <Description>
      We offer a great variety of the best Italian dishes to our visitors and
      guests. Below are some of our most popular main dishes and desserts.
    </Description>
    <ImagesBox>
      <div>
        <Image src={ravioli} alt="ravioli" />
        <NameImages> Ravioli</NameImages>
      </div>
      <div>
        <Image src={blackPasta} alt="black pasta" />
        <NameImages>Black Pasta</NameImages>
      </div>
      <div>
        <LastImage src={gelato} alt="gelato" />
        <NameImages>Ice cream</NameImages>
      </div>
    </ImagesBox>
  </Wrapper>
);
