import Image from "next/image";
import Container from "./style";
import Star from "../../../assets/icon/star.svg";
import Button from "../../generic/Button";

const LibraryCard = ({ data = {} }) => {
  const { img,name } = data;

  return (
    <Container>
      <Image src={img} className="img" />
      <Container.Bottom>
        <Container.Box>
          <h1 className="nocopy"> 
           {
              name.split(' ').length > 3 ?
              <>
                {name.split(' ').slice(0, 3).join(' ')}....
              </>
              :
              <>
                {name}
              </>
            } 
          </h1>
          <div className="info nocopy">
            <p>Muallif :</p>
            <span>Vikas Svarul</span>
          </div>
          <div className="info nocopy">
            <p>Til :</p>
            <span>O'zbek</span>
          </div>
          <div className="info nocopy">
            <p>Reyting :</p>
            <span>7.3</span>
          </div>
          <div className="info nocopy">
            <p>Yo'nalish :</p>
            <span>Badiiy adabiyot</span>
          </div>
        </Container.Box>
        <Container.End end className="nocopy">
          <Container.End>
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
          </Container.End>
          <Button msize={"7px"} mwidth={"52px"} mheight={"13px"} size={"17px"} width={"160px"} height={"30px"}>Yuklab olish</Button>
        </Container.End>
      </Container.Bottom>
    </Container>
  );
};

export default LibraryCard;
