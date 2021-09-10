import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import { Mains } from "./Mains";
import { Wrapper } from "../../core/Section/styled";
import { menuData } from "./menuData";
import { Footer } from "../../common/Footer";
import { WrapperMenu, NavigationList, NavigationItem } from "./styled";
import { StyledLink } from "../../core/Navigation/styled";
import { Section } from "./../../common/Banner/styled";

export const Menu = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Section thirdBanner />
      <Wrapper>
        <WrapperMenu>
          <NavigationList>
            {menuData.map(({ name, id }) => (
              <NavigationItem key={id}>
                <StyledLink secondOption to={`${url}/${id}`}>
                  {name}
                </StyledLink>
              </NavigationItem>
            ))}
          </NavigationList>
          <Switch>
            <Route path={`${path}/:topicId`}>
              <Mains />
            </Route>
            <Route>
              <Redirect to={`${path}/mains`} />
            </Route>
          </Switch>
        </WrapperMenu>
      </Wrapper>
      <Footer />
    </>
  );
};
