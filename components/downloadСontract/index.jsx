import Container from "./style";
import Logo from '../../assets/icons/EvrLogoTest.svg'

const DownloadContractComponent = () => {
    return(
        <Container>
            <Container.Top>
                Shartnoma yuklash
            </Container.Top>
            <Container.Bottom>
                <Container.LogoSection>
                    <Logo />
                    <div className={'line'} />
                    <div className={'title'}>
                        EVR XALQARO <br />
                        universiteti
                    </div>
                </Container.LogoSection>
                <Container.ButtonLine>
                    <Container.Button className={'nocopy'}>
                        Ikki tomonlama <br />
                        shartnoma
                    </Container.Button>
                    <Container.Button className={'nocopy'}>
                        Uch tomonlama <br />
                        shartnoma
                    </Container.Button>
                </Container.ButtonLine>
            </Container.Bottom>
        </Container>
    )
}

export default DownloadContractComponent