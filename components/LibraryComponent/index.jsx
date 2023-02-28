import { useState } from "react";
import Container from "./style";
import dataNews from "../Mock/newsdata";
import Search from "../../assets/icon/search.svg";
import LibraryCard from "./LibraryCards";

const LibraryComponent = () => {
  const [search, setSearch] = useState(dataNews);

  const onSearch = ({ target: { value } }) => {
    let res = dataNews.filter((val) =>
      val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(res);
  };


  return (
    <Container>
      <Container.Top>Elektron kutubxona</Container.Top>
      <Container.Bottom>

        <Container.BottomTop>
          <Container.BottomTopSelect>
            <select defaultValue="dsa" name="" id="">
              <option value="dsa" disabled={true}>
              Tilni tanlang
              </option>
              <option value="">O'zbekcha</option>
              <option value="">Ruscha</option>
              <option value="">Inglizcha</option>
            </select>
            <select defaultValue="dsa" name="" id="">
              <option value="dsa" disabled={true}>
              Yo'nalishlar
              </option>
              <option value="">Biznes</option>
              <option value="">Tarix</option>
              <option value="">Badiiy</option>
            </select>
            <select defaultValue="dsa" name="" id="">
              <option value="dsa" disabled={true}>
              Mualliflar
              </option>
              <option value="">Vikas Svarul</option>
              <option value="">Vikas Svarul</option>
              <option value="">Vikas Svarul</option>
              <option value="">Vikas Svarul</option>
            </select>
            <select defaultValue="dsa" name="" id="">
              <option value="dsa" disabled={true}>
              Reyting
              </option>
              <option value="">Yuqoridan Pastga</option>
              <option value="">Pastdan yuqoriga</option>
            </select>
          </Container.BottomTopSelect>
          <Container.Search>
            <input onChange={onSearch} type="text" placeholder={"Qidiruv"} />
            <Search className="search" />
          </Container.Search>
        </Container.BottomTop>

        <Container.BottomDesc>
          <div>
            {search.map((value) => (
              <LibraryCard data={value} key={value.id} />
            ))}
          </div>
        </Container.BottomDesc>
        
      </Container.Bottom>

    </Container>
  );
};

export default LibraryComponent;
