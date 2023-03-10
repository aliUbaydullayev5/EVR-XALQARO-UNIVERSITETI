import {useEffect, useState} from "react";
import Container from "./style";
import dataNews from "../Mock/newsdata";
import Search from "../../assets/icon/search.svg";
import LibraryCard from "./LibraryCards";
import {useDispatch, useSelector} from "react-redux";
import {getKutubxonaMualifFetch} from "../../redux/slices/kutubxona/kutubxona-mualif";

const LibraryComponent = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = useState(dataNews);

  const onSearch = ({ target: { value } }) => {
    let res = dataNews.filter((val) =>
      val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(res);
  }

  const getKutubxonaMuallifData = useSelector(store => store.getKutubxonaMuallifData)
  const [mualliflar, setMualliflar] = useState([])
  useEffect(() => {
    dispatch(getKutubxonaMualifFetch())
  }, [])
  useEffect(() => {
    setMualliflar(getKutubxonaMuallifData.data)
  }, [getKutubxonaMuallifData]);

  console.log(getKutubxonaMuallifData)


  return (
    <Container>
      <Container.Top className="nocopy">Elektron kutubxona</Container.Top>
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
              {
                mualliflar?.map(i => (
                    <option value={i.id}>{i.name}</option>
                ))
              }
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
