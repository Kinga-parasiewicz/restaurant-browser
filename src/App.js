import { Navigation } from "./common/Navigation/index";
import { Banner } from "./common/Banner/index";
import { Form } from "./features/Form";
import { About } from "./features/About";
import { Footer } from "./common/Footer";
import { Section } from "./common/Section";

function App() {
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

export default App;
