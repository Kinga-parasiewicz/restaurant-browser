import { Navigation } from "./common/Navigation/index";
import { Banner } from "./common/Banner/index";
import { Form } from "./features/Form";
import { About } from "./features/About";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Form/>
      
      <About/>

    </>
  );
}

export default App;
