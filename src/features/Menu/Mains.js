import { useParams } from "react-router-dom";
import { menuData } from "./menuData";

export const Mains = () => {
  let { topicId } = useParams();

  const typeMenu = menuData.find(({id}) => id === topicId)
  return (
    <div>
  
       <div>
        {typeMenu.resources.map(({price, description, name}) => (
         <>
          <h2>{name}</h2>
          <h3>$ {price}</h3>
          <p>{description}</p>
         </>
        ))}
       </div>
    </div>
  );
};
