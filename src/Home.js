import { Navigation } from "./common/Navigation/index";
import { Banner } from "./common/Banner/index";
import { Form } from "./features/Form";
import { About } from "./features/About";
import { Footer } from "./common/Footer";
import { Section } from "./common/Section";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Form/>
      <About/>
      <Section/>
      <Footer/>
    </>
  );
}

 
