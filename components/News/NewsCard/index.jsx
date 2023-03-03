import React from "react";
import {useRouter} from "next/router";
import Container from "./style";
import Arrow from "../../../assets/icon/arrow.svg";
import Views from "../../../assets/icon/views.svg";
import Date from "../../../assets/icon/date.svg";
import Image from "next/image";

export const NewsCard = ({ data = {} }) => {
  
  const query = useRouter()

  const { img, name,id,date, views,namechild, } = data;

  return (
    <div style={{ display: "flex",cursor:'pointer' }} onClick={()=>query.push(`/news/${id}`)}>
      <Container>
        <Image className="img" src={img} alt={"Yuklab Olinmadi"} />
        <Container.Bottom>
          <Container.BottomText>
            <marquee behavior="" direction="">
              {name}
            </marquee>
            {/* {
              name.split(' ').length > 3 ?
              <>
                {name.split(' ').slice(0, 3).join('')}....
              </>
              :
              <>
                {name}
              </>

            } */}
          </Container.BottomText>
          <Container.Footer>
            <Container.Box>
              <button>{namechild}</button>
              <Arrow className="arrow" />
            </Container.Box>
            <Container.Box>
              <Container.Box>

              </Container.Box>
                <Date />
            <p>{date}</p>
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
