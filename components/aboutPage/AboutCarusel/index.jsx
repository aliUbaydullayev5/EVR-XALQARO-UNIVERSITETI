import React from 'react'
import Container, { Blur, Box, ButtonCon, Carousels, CaruselContainer, ContainerDow } from './style.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagCar from "../../../assets/icons/EvrLogo.png"
import Down from "../../../assets/icon/personDown.svg"
import Image from 'next/image.js';
import Close from '../../../assets/icon/rahmariyatCloseIcon.svg'
import { useRouter } from 'next/router.js';

export const AboutCaruselComp = () => {

    const query = useRouter()

    const data = [
        {
            idL: 1,
            element: <CaruselContainer>
                <Carousels.CaruselImg src={imagCar} alt='carusel' />
                <Carousels.CaruselImg />
                <p>
                    Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a semper sed. Aliquam lacus feugiat tincidunt elementum nisl faucibus mattis praesent. Tortor amet enim interdum lobortis. Egestas scelerisque netus sed sagittis quis ac sed. Sit nunc ac faucibus quam tincidunt eget ultricies pellentesque quam. Ornare ut imperdiet tristique nullam.
                </p>
                <Blur />
            </CaruselContainer>
        },
        {
            idL: 2,
            element: <CaruselContainer>
                <Carousels.CaruselImg src={imagCar} alt='carusel' />
                <p>
                    Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a semper sed. Aliquam lacus feugiat tincidunt elementum nisl faucibus mattis praesent. Tortor amet enim interdum lobortis. Egestas scelerisque netus sed sagittis quis ac sed. Sit nunc ac faucibus quam tincidunt eget ultricies pellentesque quam. Ornare ut imperdiet tristique nullam.
                </p>
                <Blur />
            </CaruselContainer>
        },
        {
            idL: 3,
            element: <CaruselContainer>
                <Carousels.CaruselImg src={imagCar} alt='carusel' />
                <p>
                    Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a semper sed. Aliquam lacus feugiat tincidunt elementum nisl faucibus mattis praesent. Tortor amet enim interdum lobortis. Egestas scelerisque netus sed sagittis quis ac sed. Sit nunc ac faucibus quam tincidunt eget ultricies pellentesque quam. Ornare ut imperdiet tristique nullam.
                </p>
                <Blur />
            </CaruselContainer>
        }
    ]

    return (
        <Container>
            <Container.Header>
                Biz haqimizda
                <Close className={'icon'} onClick={() => query.push('/homePage')} />
            </Container.Header>

          
            <Container.MainCarousel>
                <Carousels>
                    {data.map(({ id, element }) => element)}
                </Carousels>
            </Container.MainCarousel>
            

            <ContainerDow>
                <ButtonCon>Litsenziya
                    <div><Down /></div>
                </ButtonCon>
                <ButtonCon>O’tish bali
                    <div><Down /></div>
                </ButtonCon>
                <ButtonCon>Kontrakt ma’lumotlari
                    <div><Down /></div>
                </ButtonCon>
                <ButtonCon>O’qish davomiyligi
                    <div><Down /></div>
                </ButtonCon>
            </ContainerDow>
        </Container>
    )
}



export default AboutCaruselComp
