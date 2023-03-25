import Container from "./style";
import {Button} from '../../generic'
import Image from "next/image";
import Evr from "../../../assets/image/evr.jpg"
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import Arrow from "../../../assets/icon/arrow.svg";
import {newsGet} from "../../../redux/slices/newsGet/getnews";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";



const NewsInfoComponent = () => {

  const dispatch = useDispatch()
  const query = useRouter()
  const newsGetData = useSelector((store)=> store.newsGetData)

  const [getData,setGetData] =useState()
  const [filterId,setFilterId] =useState()

   useEffect(()=>{
       dispatch(newsGet())
   },[newsGet])

   useEffect(()=>{
       if (newsGetData.status==="success")setGetData(newsGetData.data)
   },[newsGetData])

   const queryId=query.query.id
   // const res=getData((card)=>card.id===queryId)
    console.log(queryId)

return (
    <Container>
    <Container.Inset>
      <Container.Bottom>
        
       <Container.BottomBox top>
        <Container.BottomDesc>
         {
             newsGetData.status==="loading" ? <div style={{color:"#fff", fontSize:"14px"}}>Loading <Spin/></div>:getData?.length?
             getData.map((value)=>{
                 return(<div>
                     {value.id}
                 </div>)
             }):<p style={{color: '#fff', padding: '1rem'}}>No data !</p>
         }
         {/*<div>*/}
         {/*<Image className="newsImg" src={Evr}/>*/}
         {/*<audio controls>*/}
         {/* <source src="./kenjebek-nurdolday-shokolad.mp3" type="audio/mp3" />*/}
         {/* Your browser does not support the audio element.*/}
         {/*</audio>*/}
         {/*<p>Lorem ipsum dolor sit amet consectetur. Nunc quisque commodo tristique consectetur non ullamcorper. At elit enim ac at ac risus. Ac et imperdiet nec eget nibh vestibulum. Fames gravida faucibus pellentesque aliquam pulvinar in libero adipiscing in. Magna ipsum varius vestibulum suspendisse egestas. Elit a neque nunc ultricies erat nec lectus tempus et. Enim egestas est lectus dolor nulla ultrices aliquam nulla consequat. Mauris magna aenean cras vel fames. Odio est lectus nibh nam mus arcu enim. Vulputate sodales scelerisque sed ipsum a. Gravida eget pulvinar condimentum volutpat potenti purus vitae nulla. Varius curabitur velit diam eu. Leo phasellus diam sed consequat eget justo sollicitudin. Ultricies tincidunt tortor arcu tincidunt arcu feugiat purus netus</p>*/}
         {/* </div>*/}
        </Container.BottomDesc>
       </Container.BottomBox>

       <Container.BottomBox>
        <Container.BottomDesc bot>
         <Container.Img>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
          <Image className="newsImgs" src={Evr}/>
         </Container.Img>
        </Container.BottomDesc>
       </Container.BottomBox>
      
      </Container.Bottom>
      <Container.BottomLine/>
      <div className="but">
       <Button onclick={()=>query.push(`/news`)} width={'139px'} height={'23px'} ><Arrow className={'arr'}/> Ortga</Button>
      </div>
    </Container.Inset>
  </Container>
  );
};

export default NewsInfoComponent;
