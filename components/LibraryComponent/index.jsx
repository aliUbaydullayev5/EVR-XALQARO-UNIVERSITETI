import {useEffect, useState} from "react";
import Container from "./style";
import Search from "../../assets/icon/search.svg";
import LibraryCard from "./LibraryCards";
import {useDispatch, useSelector} from "react-redux";
import {getLibraryAuthorFetch} from "../../redux/slices/kutubxona/kutubxona-mualif";
import {getLibraryLangFetch} from "../../redux/slices/kutubxona/kutubxona-tili";
import {getLibraryWayFetch} from "../../redux/slices/kutubxona/kutubxona-yonalish";
import {getLibraryFetch} from "../../redux/slices/kutubxona/kutubxona-all";

const LibraryComponent = () => {

  const dispatch = useDispatch()


  // get all data
  const getLibraryData = useSelector(store => store.getLibraryData)
  const [data, setData] = useState([])
  useEffect(() => {
    dispatch(getLibraryFetch())
  }, [])
  useEffect(() => {
    setData(getLibraryData.data)
  }, [getLibraryData])


  // author
  const getLibraryAuthorData = useSelector(store => store.getLibraryAuthorData)
  const [mualliflar, setMualliflar] = useState([])
  useEffect(() => {
    dispatch(getLibraryAuthorFetch())
  }, []);
  useEffect(() => {
    setMualliflar(getLibraryAuthorData.data)
  }, [getLibraryAuthorData])


  // language
  const getLibraryLangData = useSelector(store => store.getLibraryLangData)
  const [languages, setLanguages] = useState([])
  useEffect(() => {
    dispatch(getLibraryLangFetch())
  }, []);
  useEffect(() => {
    setLanguages(getLibraryLangData.data)
  }, [getLibraryLangData])


  // yonalish
  const getLibraryWayData = useSelector(store => store.getLibraryWayData)
  const [way, setWay] = useState([])
  useEffect(() => {
    dispatch(getLibraryWayFetch())
  }, []);
  useEffect(() => {
    setWay(getLibraryWayData.data)
  }, [getLibraryWayData])

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
              {
                languages?.data?.map(i => (
                    <option value={i.id}>{i.name}</option>
                ))
              }
            </select>
            <select defaultValue="dsa" name="" id="">
              <option value="dsa" disabled={true}>
              Yo'nalishlar
              </option>
              {
                way?.data?.map(i => (
                    <option value={i.id}>{i.name}</option>
                ))
              }
            </select>
            <select defaultValue="dsa" name="" id="">
              <option value="dsa" disabled={true}>
              Mualliflar
              </option>
              {
                mualliflar?.data?.map(i => (
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
        </Container.BottomTop>

        <Container.BottomDesc>
          <div>
            {
              data?.data?.left > 0 ?
                  data?.data?.map((value) => (
                      <LibraryCard data={value} key={value.id} />
                  ))
                  : <p style={{color: '#fff'}}>No data !</p>
            }
          </div>
        </Container.BottomDesc>
        
      </Container.Bottom>

    </Container>
  );
};

export default LibraryComponent;
