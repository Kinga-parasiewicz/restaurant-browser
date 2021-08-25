import { Navigation } from "./common/Navigation";
import { Footer } from "./common/Footer";
import { Section } from "./common/Banner/styled";
import rest2 from "./assets/rest2.jpg";
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
  GridBox
} from "./features/About/styled";
import { Description } from "./common/Section/styled";

export const AboutUs = () => {
  return (
    <>
      <Navigation />
      <Section secondBanner />
      <Wrapper aboutWrapper>
        <WrapperInner>
          <Image aboutImage src={rest2} alt="restaurant" />
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
      <GridBox>
        <div>
          <ImagesSvg src={juice} alt="drink" />
          <h3>Friendly Team</h3>
          <p>Morbi tristique senectus et netus et malesuada fames ac turpis.</p>
        </div>
        <div>
          <ImagesSvg src={vegetables} alt="food" />
          <h3>Fresh Food</h3>
          <p>Cum resistentia mori, omnes elevatuses imperium plac.</p>
        </div>
        <div>
          <ImagesSvg src={soup} alt="soup" />
          <h3>Quality Cuisine</h3>
          <p>Cum consilium accelerare, omnes absolutioes quaestio fatalis.</p>
        </div>
        <div>
          <ImagesSvg src={muffin} alt="muffins" />
          <h3>Best Service</h3>
          <p>Cum onus studere, omnes consiliumes amor plac.</p>
        </div>
        <div>
           <ImagesSvg src={tea} alt="tea" />
          <h3>Diverse Menu</h3>
          <p>Cum demolitione persuadere, omnes devatioes captis.</p>
        </div>
        <div>
          <ImagesSvg src={pizza} alt="pizza" />
          <h3>Affordable Prices</h3>
          <p>
            Mirabilis, gratis devatios mechanice contactus de neuter, primus
            vigil.
          </p>
        </div>
      </GridBox>
      <Name>Testimonials</Name>

      <Footer />
    </>
  );
};
