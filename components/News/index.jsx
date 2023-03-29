import Container from "./style";

const NewsComponent = () => {


  return (
    <Container>
      <Container.Inset>
        <Container.Top>
          <Container.TopTitle className="nocopy">Yangiliklar</Container.TopTitle>

          {/*<Container.Search>*/}
          {/*  <input*/}
          {/*    onChange={onSearch}*/}
          {/*    type="text"*/}
          {/*    placeholder={"Qidiruv"}*/}
          {/*  />*/}
          {/*  <Search className="search" />*/}
          {/*</Container.Search>*/}
          
        </Container.Top>
        <Container.Bottom>
          <Container.BottomDesc>
            {/*{search.map((value) => {*/}
            {/*  return <NewsCard data={value} key={value.id} />;*/}
            {/*})}*/}
          </Container.BottomDesc>
          <Container.BottomLine />
        </Container.Bottom>
      </Container.Inset>
    </Container>
  );
};

export default NewsComponent;
