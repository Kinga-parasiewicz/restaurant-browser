import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./core/Navigation";
import { Home } from "./features/Home/Home";
import { AboutUs } from "./features/About/About";
import { Contact } from "./features/Contact";
import { Gallery } from "./features/Gallery/Gallery";
import { Menu } from "./features/Menu/Menu";
import { toHome, toAbout, toContact, toGallery, toMenu } from "./core/routes";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toHome()}>
        <Home />
      </Route>
      <Route path={toAbout()}>
        <AboutUs />
      </Route>
      <Route path={toMenu()}>
        <Menu />
      </Route>
      <Route path={toGallery()}>
        <Gallery />
      </Route>
      <Route path={toContact()}>
        <Contact />
      </Route>
      <Route>
        <Redirect to={toHome()} />
      </Route>
    </Switch>
  </HashRouter>
);
