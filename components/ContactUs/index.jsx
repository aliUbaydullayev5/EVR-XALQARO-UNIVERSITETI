import Container from "./style";
import Locations from "../../assets/icon/location.svg";
import TelegramUs from "../../assets/icon/telegramUs.svg";
import Phone from "../../assets/icon/phone.svg";

const ContactUsComponent = () => {
  return (
    <Container>
      <Container.Top>Biz bilan aloqa</Container.Top>
      <Container.Bottom>
        <Container.BottomBox>
          <Container.Box>
            <a href={"https://maps.app.goo.gl/nzEx6Xp2EfDhhv4q6"} target={"_blank"}>
              <Locations className={"location"} />
            </a>
            <Container.Text>
              <Container.TextP pi>Uzbekistan Tashkent Sergeli</Container.TextP>
            </Container.Text>
          </Container.Box>
          <Container.Box>
            <a href={"tel:+998997777575"} target={"_blank"}>
              <Phone className={"location"} />
            </a>
            <Container.Text>
              <Container.TextP num>
                <a href={"tel:+998997777575"} target={"_blank"}>
                  +998997777575
                </a>  
              </Container.TextP>
              <Container.TextP num>
                <a href={"tel:+998997777575"} target={"_blank"}>
                  +998997777575
                </a>
              </Container.TextP>
              <Container.TextP num>
                <a href={"tel:+998997777575"} target={"_blank"}>
                  +998997777575
                </a>
              </Container.TextP>
              <Container.TextP num>
                <a href={"tel:+998997777575"} target={"_blank"}>
                  +998997777575
                </a>
              </Container.TextP>
            </Container.Text>
          </Container.Box>
          <Container.Box>
            <a href={"https://t.me/exuedu_uz"} target={"_blank"}>
              <TelegramUs className={"location"} />
            </a>
            <Container.Text>
              <Container.TextP>
                <a href={"https://t.me/exuedu_uz"} target={"_blank"}></a>
              </Container.TextP>
              <Container.TextP>
                <a href={"https://t.me/exuedu_uz"} target={"_blank"}>
                  @exuedu_uz
                </a>
              </Container.TextP>
              <Container.TextP>
                <a href={"https://t.me/exuedu_uz"} target={"_blank"}>
                  @exuedu_uz
                </a>
              </Container.TextP>
              <Container.TextP>
                <a href={"https://t.me/exuedu_uz"} target={"_blank"}>
                  @exuedu_uz
                </a>
              </Container.TextP>
              <Container.TextP>
                <a href={"https://t.me/exuedu_uz"} target={"_blank"}>
                  @exuedu_uz
                </a>
              </Container.TextP>
            </Container.Text>
          </Container.Box>
        </Container.BottomBox>
      </Container.Bottom>
    </Container>
  );
};

export default ContactUsComponent;
