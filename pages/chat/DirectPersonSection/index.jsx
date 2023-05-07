import React from 'react'
import Container from './style'
import Image from "next/image";

const DirectPersonSection = ({id, title, desc, icon}) => {
    return(
        <Container>
            <Container.LeftIconSection>
                <Image src={icon} alt={'face of person'} width={60} height={60} />
            </Container.LeftIconSection>
            <Container.RightContentSection>
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </Container.RightContentSection>
        </Container>
    )
}
export default DirectPersonSection