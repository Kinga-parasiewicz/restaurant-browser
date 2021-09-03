import { Banner } from "../../common/Banner";
import { Form } from "./../Form";
import { About } from "./../About/About-partOfPage";
import { Footer } from "../../common/Footer";
import { Section } from "../../core/Section";

export const Home = () => {
  return (
    <>
      <Banner />
      <Form />
      <About />
      <Section />
      <Footer />
    </>
  );
};
