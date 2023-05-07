import React from 'react'
import Container from './style'
import DirectPersonSection from "../../../pages/chat/DirectPersonSection"
const NavigationSection = ({data}) => <Container>{data.map(({id, title, description, icon})=> <DirectPersonSection key={id} id={id} title={title} desc={description} icon={icon} />)}</Container>
export default NavigationSection