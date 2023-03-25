import React from "react";
import {useRouter} from "next/router";
import Container from "./style";
import Arrow from "../../../assets/icon/arrow.svg";
import Views from "../../../assets/icon/views.svg";
import Date from "../../../assets/icon/date.svg";
import Image from "next/image";

export const NewsCard = ({ data = {} }) => {
  
  const query = useRouter()

  const { description, title,id,date, views,attachment, } = data;

  return (
    <div style={{ display: "flex",cursor:'pointer' }} onClick={()=>query.push(`/news/${id}`)}>
      <Container>
        <Image className="img" width={200} height={200} src={`http://185.217.131.147:8088/api/v1/attachment/download/${attachment?.fileOriginalName}`} alt={"Yuklab Olinmadi"} />
        <Container.Bottom>
          <Container.BottomText> {title.split(' ').length > 3 ? <> {title.split(' ').slice(0, 3).join(' ')}.... </> : <>{title}</>}</Container.BottomText>
          <Container.Footer>
            <Container.Box>
              <button>Batafsil</button>
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
