import Container from "./style"
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react";
import {newsGetFetch, addPageCount} from "../../redux/slices/news"
import {InView} from "react-intersection-observer"
import NewsCard from "./NewsCard"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const NewsComponent = () => {

  const dispatch = useDispatch()

  const newsGet = useSelector((store)=> store.newsGet)

  const [inView, setInView] = useState(false)


  useEffect(()=> {
    if (inView){
      if((newsGet.data.length % 20 === 0) || (newsGet.data.length === 0)){
        dispatch(addPageCount())
        dispatch(newsGetFetch({page: newsGet?.pageCount, query: ''}))
      }
      console.log(inView, 'inView')
    }
  }, [inView])



  return (
    <Container>
      <Container.Inset>
        <Container.Top>
          <Container.TopTitle className="nocopy">Yangiliklar</Container.TopTitle>

        </Container.Top>
        <Container.Bottom>
          <Container.BottomDesc>
            {newsGet.data.map((value) => {
              return <NewsCard data={value} key={value.id} />;
            })}
            <div style={{width: '200px'}}>
              <InView onChange={setInView} className={'viewTag'} />
            </div>
          </Container.BottomDesc>
          <Container.BottomLine />
        </Container.Bottom>
      </Container.Inset>
    </Container>
  );
};

export default NewsComponent;
