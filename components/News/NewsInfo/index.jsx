import Container from "./style";
import {Button} from '../../generic'
import Image from "next/image";
import Evr from "../../../assets/image/evr.jpg"
import { useRouter } from "next/router";

const NewsInfoComponent = () => {

    const query = useRouter();

    return (
        <Container>
            <Container.Inset>

                <Container.Bottom>

                    <Container.BottomBox top>
                        <Container.BottomDesc>
                            <div>
                                <Image className="newsImg" src={Evr}/>
                                <audio controls>
                                    <source src="./kenjebek-nurdolday-shokolad.mp3" type="audio/mp3"/>
                                    Your browser does not support the audio element.
                                </audio>
                                <p>Lorem ipsum dolor sit amet consectetur. Nunc quisque commodo tristique consectetur
                                    non ullamcorper. At elit enim ac at ac risus. Ac et imperdiet nec eget nibh
                                    vestibulum. Fames gravida faucibus pellentesque aliquam pulvinar in libero
                                    adipiscing in. Magna ipsum varius vestibulum suspendisse egestas. Elit a neque nunc
                                    ultricies erat nec lectus tempus et. Enim egestas est lectus dolor nulla ultrices
                                    aliquam nulla consequat. Mauris magna aenean cras vel fames. Odio est lectus nibh
                                    nam mus arcu enim. Vulputate sodales scelerisque sed ipsum a. Gravida eget pulvinar
                                    condimentum volutpat potenti purus vitae nulla. Varius curabitur velit diam eu. Leo
                                    phasellus diam sed consequat eget justo sollicitudin. Ultricies tincidunt tortor
                                    arcu tincidunt arcu feugiat purus netus</p>
                            </div>
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
                    <Button onclick={() => query.push(`/news`)} mwidth={'139px'} width={'139px'} height={'23px'}
                            mheight={'23px'} msize={'7px'} size={'14px'}>Ortga</Button>
                </div>
            </Container.Inset>
        </Container>
    );
};

export default NewsInfoComponent;
