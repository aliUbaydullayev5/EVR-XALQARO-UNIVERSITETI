import NewsCard from "./NewsCard";
import Container from "./style";
import Search from "../../assets/icon/search.svg";
import dataNews from "../Mock/newsdata";
import { useState } from "react";

const NewsComponent = () => {
  const [ search, setSearch ] = useState(dataNews);

  const onSearch = ({ target: { value } }) => {
    let res = dataNews.filter((val) =>
      val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(res);
    console.log(res);
  };

  return (
    <Container>
      <Container.Inset>
        <Container.Top>
          <Container.TopTitle>Yangiliklar</Container.TopTitle>

          <Container.Search>
            <input
              onChange={onSearch}
              type="text"
              placeholder={"Qidiruv"}
            />
            <Search className="search" />
          </Container.Search>
        </Container.Top>
        <Container.Bottom>
          <Container.BottomDesc>
            {search.map((value) => {
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
