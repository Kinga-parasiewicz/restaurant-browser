import { Footer } from "../../common/Footer";
import { useState } from "react";
import { Section } from "./../../common/Banner/styled";
import inside from "./inside.jpeg";
import juice from "./juice.svg";
import tea from "./tea.svg";
import vegetables from "./vegetables.svg";
import muffin from "./muffin.svg";
import pizza from "./pizza.svg";
import soup from "./soup.svg";
import { People } from "./People";
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
  Testimonials,
  TestimonialBox,
  TestimonialImage,
  Box,
} from "./About-partOfPage/styled";
import { Description, Image } from "./../../core/Section/styled";

export const AboutUs = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      <Section secondBanner />
      <Wrapper aboutWrapper>
        <WrapperInner paddingWrapper>
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
     
      <Container>
      <Name>Why People Choose Us</Name>
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
      <Testimonials>
        <Name colorName>Testimonials</Name>
        <TestimonialBox>
          {People.map(({ name, description, id, image }) => (
            <>
              <Box key={id} className={id === activeId ? "active" : "inactive"}>
                <DescriptionParagraph colorDescription key={id}>
                  {description}
                </DescriptionParagraph>
                <DescriptionParagraph colorDescription>
                  {name}
                </DescriptionParagraph>
              </Box>

              <TestimonialImage
                onClick={() => {
                  setActiveId(id);
                }}
                otherImage
                key={id}
                src={image}
                alt="person"
              />
            </>
          ))}
        </TestimonialBox>
      </Testimonials>
      <Footer />
    </>
  );
};
