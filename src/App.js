import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation/index";
import { Home } from "./Home";
import { AboutUs } from "./About";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { Menu } from "./features/Menu/Menu";
import { toHome, toAbout, toContact, toGallery, toMenu } from "./routes";

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
        <Menu/>
      </Route>
      <Route path={toGallery()}>
        <Gallery/>
      </Route>
      <Route path={toContact()}>
        <Contact/>
      </Route>
      <Route>
        <Redirect to={toHome()} />
      </Route>
    </Switch>
  </HashRouter>
);
