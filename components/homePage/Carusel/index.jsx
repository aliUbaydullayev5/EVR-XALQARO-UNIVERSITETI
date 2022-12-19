import React, {useEffect, useState} from 'react';
import Container, { Carousels } from './style.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagCar from "../../../assets/image/carusel.jpg"


export const CaruselRigth = () => {

    const [state, setState] = useState()

    useEffect(()=> {
        setState(window.innerWidth)
    }, [])

    return (
        <Container>
            <Carousels autoPlay={state < 1000 ? false : true} showThumbs={false}>
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
            </Carousels>

        </Container>
    );
};

export default CaruselRigth