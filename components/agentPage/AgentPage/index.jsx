import Container from "./style"
import {Button} from "../../generic";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {startMessage} from "../../../redux/slices/message";


const AgentPage = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    let firstCheck = false
    let secondCheck = false


    const pushFunc = () => {
        if(firstCheck && secondCheck){
            router.push('/receptionPage/agent/agentForm')
        }else{
            dispatch(
                startMessage({
                    time: 3,
                    message: 'Toliq oqib chiking',
                }),
            );
        }
    }

    return(
        <Container>
            <Container.Inset>
                <Container.Top>
                    <Container.TopTitle>Agent</Container.TopTitle>
                </Container.Top>
                <Container.Bottom>
                    <Container.BottomDesc>
                        <Container.BottomDescInset>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut dolorem incidunt placeat recusandae. Accusamus aspernatur atque commodi corporis culpa debitis dicta dolor dolore doloribus enim eum, exercitationem expedita fuga fugiat harum illum minus molestias natus obcaecati odio possimus quasi qui quibusdam quo quos reprehenderit sequi sit temporibus velit vero! Aperiam debitis doloremque iste nihil sunt. Accusantium ad at commodi consectetur culpa delectus deserunt dignissimos dolor doloremque ea eius et eveniet expedita facere fugiat harum id impedit incidunt ipsa laboriosam, magnam modi mollitia neque perferendis provident quaerat quo reprehenderit repudiandae saepe tempora ullam, ut voluptas voluptatem? Dolore eos harum illum ipsam necessitatibus officia vero. Dolores ducimus magni odio perferendis provident? Atque beatae explicabo iure veritatis. Aliquid, asperiores earum error esse magni natus praesentium reiciendis? Cupiditate deleniti iusto nemo omnis qui. Eum hic illum obcaecati odit quae? Accusamus at consectetur, consequuntur cumque dolores ea earum eveniet excepturi exercitationem hic ipsam iste labore minus nesciunt nulla numquam odio omnis perferendis provident quam recusandae rem tempora, tempore ullam velit, veritatis voluptate! Adipisci beatae culpa cupiditate debitis dicta excepturi exercitationem expedita, incidunt iure laudantium minus, modi mollitia necessitatibus nobis nostrum quaerat qui, quo quos repudiandae voluptatum? A accusantium asperiores at consequuntur, cum cumque et, ex facilis impedit iusto laudantium nisi obcaecati odit provident reiciendis sequi similique vel. Alias incidunt iusto modi mollitia necessitatibus nemo nobis possimus repellendus repudiandae, sequi tempora vitae. A ab accusantium aperiam consequatur culpa deleniti enim eveniet excepturi facere, incidunt libero natus nisi optio quam reiciendis sunt tempora totam voluptas. Architecto consequatur dignissimos numquam officiis perferendis saepe tempora, veritatis? Aliquam aspernatur, consequatur corporis eaque enim est fugit, illum iure iusto labore neque nesciunt nobis odit officia provident quae quod repellat, reprehenderit? Accusamus blanditiis consequuntur corporis earum, eius eligendi ipsa, nulla obcaecati praesentium quis vel voluptate. Alias amet aperiam aspernatur cumque ea eveniet ex laborum maxime minima obcaecati officia, officiis perspiciatis placeat quasi repellat, repellendus sint suscipit, tempora vitae voluptas? Consequatur consequuntur cum deserunt eius ipsam ipsum molestias quibusdam ratione, sed! Consequatur cum eaque eum illo odio odit quam sapiente, sequi unde? Accusamus ad aliquam assumenda beatae consectetur, cum cupiditate deleniti deserunt dicta eos illum in iusto magni maiores nostrum odio odit officia, quidem quisquam saepe, sapiente vero voluptas voluptatum. Aliquid cumque quisquam saepe. Aliquid consequuntur eligendi enim est, ex illum ipsum labore libero magni nemo nisi nobis, officiis quia quisquam repellat repellendus rerum saepe sed velit voluptas. Aspernatur autem commodi cum ducimus error fuga iste magni molestias necessitatibus odit quidem similique, sit veniam? Asperiores cupiditate dolorem, itaque qui temporibus velit? A alias, animi commodi cumque incidunt iste labore magnam officia perferendis quisquam reiciendis sequi soluta voluptatem. Accusantium eius eum expedita in laborum, maiores nesciunt nihil optio quod repellat sed tempora tempore vero? Culpa deleniti error illum mollitia non quis, quos repellendus saepe soluta? Dolorum error in incidunt iste praesentium reiciendis suscipit voluptate! Ab et id nisi odit ratione! Adipisci distinctio eveniet hic maxime quo reiciendis repellat suscipit unde ut? Animi, aspernatur assumenda aut delectus deserunt, ex incidunt laudantium minima minus modi mollitia nemo obcaecati, possimus quibusdam quod quos repellat sint unde ut voluptate. Accusamus aliquam aliquid asperiores autem, commodi dolore ducimus in iste iure, laboriosam laudantium molestiae nesciunt nisi quas quia repudiandae unde! Ab iste, laborum laudantium nam provident qui quidem repellendus! Accusamus architecto cum, dignissimos eum ex excepturi fugit, maiores maxime molestiae numquam obcaecati odio omnis quaerat quas, quidem ratione similique totam voluptate? Accusantium asperiores at blanditiis, culpa cupiditate deleniti eaque expedita iste laboriosam obcaecati porro quae quam reiciendis saepe soluta ullam veniam! Aliquid aperiam architecto beatae blanditiis culpa et facere in laboriosam laborum laudantium nobis nostrum quasi, qui quisquam ratione reiciendis sit. Accusamus ad autem consequatur cum dignissimos dolore, dolores eaque eius, error et excepturi hic magnam, maxime mollitia necessitatibus nisi quasi quibusdam quod rerum temporibus tenetur ullam vero vitae! Aperiam aspernatur aut cumque cupiditate deserunt, earum eligendi expedita illo iste magnam modi molestiae nisi numquam, quasi sunt. Ab assumenda corporis, cumque debitis deleniti dignissimos distinctio eaque earum eum explicabo facere in incidunt ipsum iste laborum laudantium modi natus, nemo odio possimus praesentium quasi quibusdam quidem quis quo quod reiciendis sed sequi temporibus vel veritatis vero voluptates voluptatibus? A ab accusamus alias animi architecto aspernatur at aut blanditiis cum delectus dolorem doloremque dolores dolorum eaque error esse excepturi facere, fuga fugiat harum illo, ipsa labore maxime minima placeat quam quia quis quos saepe sapiente sequi sunt suscipit tempora tenetur ut voluptas voluptates? Iusto, quam, quisquam? Cum debitis doloribus ducimus expedita facilis illum iure modi nobis numquam, odio, odit praesentium quas reiciendis sint vitae. At commodi delectus dolorem error, esse ex excepturi in modi, perspiciatis placeat quia quo reprehenderit veritatis? Alias autem blanditiis eos eveniet incidunt, laboriosam numquam officia quos ullam voluptate. Debitis, earum incidunt ipsa libero necessitatibus neque sed sequi tenetur! Autem maiores sed similique sint sunt. A aliquid animi asperiores at atque consectetur cum cupiditate debitis delectus deleniti deserunt earum eius est exercitationem expedita incidunt labore laboriosam libero magni maxime minima, modi nesciunt nulla numquam officia qui quidem quos recusandae repellat repellendus saepe similique tempore velit. Amet atque aut commodi consequuntur deserunt dicta illo in incidunt, labore nihil, officia placeat quod temporibus ut, veniam? Cupiditate nesciunt, vero? Animi harum molestias odio rem tenetur totam unde? Aliquid amet atque deserunt dolorem fugit impedit, in incidunt ipsa itaque iusto magni nam nesciunt nisi perspiciatis provident quam quasi quisquam suscipit unde voluptas! Ab accusamus accusantium aliquid animi aperiam at autem consequatur dolor dolorum, ducimus earum et facilis in iste laudantium magni modi molestiae nam natus nihil nobis numquam odio odit optio, perspiciatis, quae quasi recusandae repellendus sit tempora ullam ut vel veritatis. Commodi consequatur dolore mollitia sed ut! Ab accusamus accusantium consequatur cupiditate deserunt distinctio doloremque eius enim est facere fuga harum id, incidunt inventore labore, laboriosam laudantium nesciunt nihil non odit quisquam recusandae repellat repellendus reprehenderit sapiente sunt tenetur unde velit veritatis vitae! A aut blanditiis deserunt eligendi facere ipsam, ipsum nemo nulla recusandae reiciendis rem, sint velit veniam veritatis voluptas voluptate voluptatibus? Aspernatur dolore, ea nesciunt nihil voluptas voluptates.</p>
                        </Container.BottomDescInset>
                    </Container.BottomDesc>

                    <Container.SelectSection className={'nocopy'}>
                        <div>
                            <input type={'checkbox'} id={'firstInput'} name={'value'} className={'input'} onChange={(e)=> firstCheck = e.target.checked} />
                            <label for={'firstInput'}>Qonun-qoidalarni to’liq o’qib chiqdim</label>
                        </div>
                        <div>
                            <input type={'checkbox'} id={'secoondInput'} name={'value'} className={'input'} onChange={(e)=> secondCheck = e.target.checked} />
                            <label for={'secoondInput'}>Barcha shartlarga roziman</label>
                        </div>
                    </Container.SelectSection>
                    <Container.ButtonSection>
                        <div></div>
                        <div>
                            <Button mheight={'20px'} msize={'13px'} height={'30px'} width={'144px'} size={'20px'} onclick={()=> pushFunc()}>KEYINGISI</Button>
                        </div>
                    </Container.ButtonSection>
                </Container.Bottom>
            </Container.Inset>
        </Container>
    )
}

export default AgentPage