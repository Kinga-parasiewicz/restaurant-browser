import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Mains } from "./Mains";
import { Wrapper } from "../../common/Section/styled";
import { menuData } from "./menuData";
import { Footer } from "../../common/Footer";
import { WrapperMenu, NavigationList, NavigationItem } from "./styled";
import { StyledLink } from "../../common/Navigation/styled";
import { Section } from "./../../common/Banner/styled";
import { FoodName } from "./styled";

export const Menu = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Section thirdBanner />
      <Wrapper>
        <WrapperMenu>
          <FoodName>Check our Menu and click below</FoodName>
          <NavigationList>
            {menuData.map(({ name, id }) => (
              <NavigationItem key={id}>
                <StyledLink secondary to={`${url}/${id}`}>
                  {name}
                </StyledLink>
              </NavigationItem>
            ))}
          </NavigationList>
          <Switch>
            <Route path={`${path}/:topicId`}>
              <Mains />
            </Route>
          </Switch>
        </WrapperMenu>
      </Wrapper>
      <Footer />
    </>
  );
};
