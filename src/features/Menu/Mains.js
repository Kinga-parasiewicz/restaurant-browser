import { useParams } from "react-router-dom";
import { menuData } from "./menuData";
import {
  ContainerDish,
  BoxName,
  Price,
  FoodName,
  FoodDescription,
} from "./styled";

export const Mains = () => {
  let { topicId } = useParams();

  const typeMenu = menuData.find(({ id }) => id === topicId);
  return (
    <ContainerDish>
      {typeMenu.resources.map(({ price, description, name }) => (
        <>
          <BoxName>
            <FoodName>{name}</FoodName>
            <Price>$ {price}</Price>
          </BoxName>
          <FoodDescription>{description}</FoodDescription>
        </>
      ))}
    </ContainerDish>
  );
};
