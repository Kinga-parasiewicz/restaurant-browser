import { Navigation } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { Section } from "./common/Banner/styled";
import inside from "./assets/inside.jpeg";
import juice from "./assets/juice.svg";
import tea from "./assets/tea.svg";
import vegetables from "./assets/vegetables.svg";
import muffin from "./assets/muffin.svg";
import pizza from "./assets/pizza.svg";
import soup from "./assets/soup.svg";
import { Image } from "./common/Section/styled";
import {
  Wrapper,
  WrapperInner,
  DescriptionBox,
  DescriptionParagraph,
  Name,
  ImagesSvg,
  ImagesBox,
  GridBox,
  Container,
  SubName,
} from "./features/About/styled";
import { Description } from "./common/Section/styled";

export const AboutUs = () => {
  return (
    <>
      <Navigation />
      <Section secondBanner />
      <Wrapper aboutWrapper>
        <WrapperInner>
          <Image aboutImage src={inside} alt="restaurant" />
          <DescriptionBox>
            <Name>About Our Restaurant</Name>
            <Description sentence>
              We offer the best Italian dishes in a friendly and calm
              atmosphere.
            </Description>
            <DescriptionParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur
            </DescriptionParagraph>
          </DescriptionBox>
        </WrapperInner>
      </Wrapper>
      <Name>Why People Choose Us</Name>
      <Container>
        <GridBox>
          <ImagesBox>
            <ImagesSvg src={juice} alt="drink" />
            <DescriptionParagraph as="div" primary>
              <SubName>Friendly Team</SubName>
              <Description forAbout>
                Morbi tristique senectus et netus et malesuada fames ac turpis.
              </Description>
            </DescriptionParagraph>
          </ImagesBox>
          <ImagesBox>
            <ImagesSvg src={vegetables} alt="food" />
            <DescriptionParagraph as="div" primary>
              <SubName>Fresh Food</SubName>
              <Description forAbout>
                Cum resistentia mori, omnes elevatuses imperium plac.
              </Description>
            </DescriptionParagraph>
          </ImagesBox>

          <ImagesBox>
            <ImagesSvg src={soup} alt="soup" />
            <DescriptionParagraph as="div" primary>
              <SubName>Quality Cuisine</SubName>
              <Description forAbout>
                Cum consilium accelerare, omnes absolutioes quaestio fatalis.
              </Description>
            </DescriptionParagraph>
          </ImagesBox>
          <ImagesBox>
            <ImagesSvg src={muffin} alt="muffins" />
            <DescriptionParagraph as="div" primary>
              <SubName>Best Service</SubName>
              <Description forAbout>
                Cum onus studere, omnes consiliumes amor plac.
              </Description>
            </DescriptionParagraph>
          </ImagesBox>
          <ImagesBox>
            <ImagesSvg src={tea} alt="tea" primary />
            <DescriptionParagraph as="div" primary>
              <SubName>Diverse Menu</SubName>
              <Description forAbout>
                Cum demolitione persuadere, omnes devatioes captis.
              </Description>
            </DescriptionParagraph>
          </ImagesBox>
          <ImagesBox>
            <ImagesSvg src={pizza} alt="pizza" />
            <DescriptionParagraph as="div" primary>
              <SubName>Affordable Prices</SubName>
              <Description forAbout>
                Mirabilis, gratis devatios mechanice contactus de neuter, primus
                vigil.
              </Description>
            </DescriptionParagraph>
          </ImagesBox>
        </GridBox>
      </Container>
      <Name>Testimonials</Name>

      <Footer />
    </>
  );
};
