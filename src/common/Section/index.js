import ravioli from "./../../assets/ravioli.jpg";
import gelato from "./../../assets/gelato.jpg";
import blackPasta from "./../../assets/black-pasta-scaled.jpg";

export const Section = () => (
  <section>
    <h2>Featured offers</h2>
    <p>
      We offer a great variety of the best Italian dishes to our visitors and
      guests. Below are some of our most popular main dishes and desserts.
    </p>
    <div>
    <div>
        <img src={ravioli} alt="ravioli"/>
        <p>
        </p>
    </div>
    <div>
        <img src={blackPasta} alt="black pasta"/>
        <p>
        </p>
    </div>
    <div>
        <img src={gelato} alt="gelato"/>
        <p>
        </p>
    </div>
    </div>
  </section>
);
