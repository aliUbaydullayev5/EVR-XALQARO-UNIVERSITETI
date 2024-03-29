import React from "react";
import {useRouter} from "next/router";
import Container from "./style";
import Arrow from "../../../assets/icon/arrow.svg";
import Date from "../../../assets/icon/date.svg";
import Image from "next/image";
import {API_GLOBAL} from "../../../globalApi"

export const NewsCard = (data) => {
  
  const query = useRouter()


  return (
      <div style={{display: "flex", cursor: 'pointer'}} onClick={() => query.push(`/news/${data.data.id}`)}>
        <Container>
            <Image
                alt="The guitarist in the concert."
                src={`${API_GLOBAL}v1/attachment/download/${data.data.attachment.id}`}
                width={200}
                height={160}
                className={"img"}
            />
          <Container.Bottom>
            <Container.BottomText>
              {
                  data.data.title.split(' ').length > 4 ?
                    <>
                      {data.data.title.split(' ').slice(0, 3).join(' ')}....
                    </>
                    :
                    <>
                      {data.data.title}
                    </>
              }
            </Container.BottomText>
            <Container.Footer>
              <Container.Box>
                <button>{data.data.description}</button>
                <Arrow className="arrow"/>
              </Container.Box>
              <Container.Box>
                <Date/>
                <p>{data.data.date}</p>
              </Container.Box>
            </Container.Footer>
          </Container.Bottom>
        </Container>
      </div>
  );
};

export default NewsCard;
