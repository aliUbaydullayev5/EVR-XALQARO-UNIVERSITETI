import { Button } from "../generic"
import Container from "./style"
import Down from "../../assets/icon/personDown.svg"
import License from "../../assets/image/Litsenziya.jpg"
import Image from "next/image"

const LicenseComponent = () => {
  return (
    <Container>
      <Container.Top>Litsenziya</Container.Top>
      <Container.Bottom>
        <Container.BottomImg>
          <Image className="img" src={License} />
          <Image className="img" src={License} />
        </Container.BottomImg>
        <a href={License} download={true}>
         <Button mwidth={'175px'} mheight={'36px'} msize={'12px'}  width={'218px'} height={'43px'} size={'20px'} > <p>Yuklab olish</p> &nbsp; &nbsp; <Down /> </Button>
         </a>
      </Container.Bottom>
    </Container>
  );
};

export default LicenseComponent;
