import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.png";
import image7 from "./image7.jpg";
import { BoxContent, BoxImages} from "./styled";


export const Gallery = () => {

    return(
        <>
        <BoxImages>
            <BoxContent src={image1} alt=""/>
            <BoxContent src={image2} alt=""/>
            <BoxContent src={image3} alt=""/>
            <BoxContent src={image4} alt=""/>
            <BoxContent src={image5} alt=""/>
            <BoxContent src={image7} alt=""/>
            <BoxContent src={image6} alt=""/>
        </BoxImages>
        </>
    )
}