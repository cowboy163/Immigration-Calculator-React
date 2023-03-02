/*
 * interface item {text: string, link: string}
 * interface data: Array<item>
 */

import StyledHeader from "./Header.styled";
import {Link} from "react-router-dom";
import Container from "../../../utility/Container/Container";

const Header = ({data}) => {
    return(
        <StyledHeader>
            <Container>
                <nav className="navBar">
                    {
                        data.map(item =>
                            <Link to={item.link}
                                  key={item.text}
                                  className="navItem"
                            >
                                {item.text}
                            </Link>
                        )
                    }
                </nav>
            </Container>
        </StyledHeader>
    )
}
export default Header