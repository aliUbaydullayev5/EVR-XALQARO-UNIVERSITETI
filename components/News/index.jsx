import NewsCard from "./NewsCard";
import Container from "./style";
// import Search from "../../assets/icon/search.svg";
import React, {useEffect, useState} from "react";
import {newsGet} from "../../redux/slices/newsGet/getnews";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";

const NewsComponent = () => {
  const dispatch = useDispatch()

  const [dataList,setDatalist]=useState([])
  const newsGetData = useSelector((store)=> store.newsGetData)


  useEffect(()=>{
    dispatch(newsGet())
  },[newsGet])

  useEffect(()=>{
    if (newsGetData.status === "success")setDatalist(newsGetData.data)
  },[newsGetData])

  // search
  // const [ search, setSearch ] = useState(dataList);
  //
  // const onSearch = ({ target: { value } }) => {
  //   let res = dataList.filter((val) =>
  //     val.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  //   );
  //   setSearch(res);
  // };

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
            {newsGetData.status==="loading" ? <div style={{color:"#fff", fontSize:"14px"}}>Loading <Spin/></div>
              :
             dataList?.length ?
              dataList?.map((value) => {
              return <NewsCard data={value} key={value.id} />;
            })
            : <p style={{color: '#fff', padding: '1rem'}}>No data !</p>

            }
          </Container.BottomDesc>
          <Container.BottomLine />
        </Container.Bottom>
      </Container.Inset>
    </Container>
  );
};

export default NewsComponent;
