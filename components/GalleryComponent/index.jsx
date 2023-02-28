import Container from "./style";
import Image from "next/image";
import data from "../Mock/newsdata/index"


const GalleryComponent = () => {
  return (
    <Container>
      <Container.Top>Gallery</Container.Top>
      <Container.Bottom>
       <Container.BottomDesc>
        <Container.Img>
          {
            data.map((val)=>{
              return(
                <Image src={val.img} className="img" />
              )
            })
          }
        </Container.Img>
       </Container.BottomDesc>
      </Container.Bottom>
    </Container>
  );
};

export default GalleryComponent;
