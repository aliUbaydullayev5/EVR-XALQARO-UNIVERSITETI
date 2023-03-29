import NewsCard from "./NewsCard";
import Container from "./style";
import Search from "../../assets/icon/search.svg";
import dataNews from "../Mock/newsdata";
import { useState } from "react";

const NewsComponent = () => {

  return (
    <Container>
      <Container.Inset>
        <Container.Top>
          <Container.TopTitle className="nocopy">Yangiliklar</Container.TopTitle>
        </Container.Top>
        <Container.Bottom>
          <Container.BottomDesc>
            {dataNews.map((value) => {
              return <NewsCard data={value} key={value.id} />;
            })}
          </Container.BottomDesc>
          <Container.BottomLine />
        </Container.Bottom>
      </Container.Inset>
    </Container>
  );
};

export default NewsComponent;
