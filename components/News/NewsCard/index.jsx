import React from "react";
import Container from "./style";
import Arrow from "../../../assets/icon/arrow.svg";
import Views from "../../../assets/icon/views.svg";
import Image from "next/image";

export const NewsCard = ({ data = {}, onClick }) => {
  const { img, name, views,namechild, } = data;
  return (
    <div style={{ display: "flex" }} onClick={onClick}>
      <Container>
        <Image className="img" src={img} alt={"Yuklab Olinmadi"} />
        <Container.Bottom>
          <Container.BottomText>
            {name}
          </Container.BottomText>
          <Container.Footer>
            <Container.Box>
              <a href="">{namechild}</a>
              <Arrow className="arrow" />
            </Container.Box>
            <Container.Box>
              <Container.Box></Container.Box>
              <Container.Box>
                <Views />
                <p>{views}</p>
              </Container.Box>
            </Container.Box>
          </Container.Footer>
        </Container.Bottom>
      </Container>
    </div>
  );
};

export default NewsCard;
