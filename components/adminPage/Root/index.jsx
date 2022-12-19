import Container from './style'
import NavBar from "../NavBar";

const Root = ({children, navbar = true}) => {
    return(
        <Container navbar={navbar}>
            {
                navbar &&
                <div>
                    {/*  Navbar  */}
                    <NavBar />
                </div>
            }
            <div>
                {children}
                {/* Area for other Pages   */}
            </div>
        </Container>
    )
}

export default Root