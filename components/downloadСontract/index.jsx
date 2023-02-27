import Container from "./style";
import Logo from "../../assets/icons/EvrLogoTest.svg";
import Input from "../generic/Input";
import Button from "../generic/Button";

const DownloadContractComponent = () => {
  return (
    <Container>
      <Container.Top>Shartnoma yuklash</Container.Top>
      <Container.Bottom>
        
        <Container.LogoSection>
          <Logo />
          <div className={"line"} />
          <div className={"title"}>
            EVR XALQARO <br />
            universiteti
          </div>
        </Container.LogoSection>

        <Container.ButtonLine>
          <Container.Button>
            <label htmlFor="bilateral">
              Ikki tomonlama <br /> shartnoma
            </label>
            <input type="radio" name="contract" id="bilateral" />
          </Container.Button>
          <Container.Button>
            <label htmlFor="tripartite">
              Uch tomonlama <br /> shartnoma
            </label>
            <input type="radio" name="contract" id="tripartite" />
          </Container.Button>
        </Container.ButtonLine>
        <p>Shartnoma olish uchun Passport raqamingizni kiriting</p>
        <Input width="500px" height="50px" size="32px" mheight="36px" msize="14px" placeholder="Passport raqamingiz"/>
        <div className="button">
          <Button mwidth="125px" width="206px" mheight="29px" height="47px" msize="16px" size="24px">Tekshirish</Button>
        </div>
      </Container.Bottom>
    </Container>
  );
};

export default DownloadContractComponent;
