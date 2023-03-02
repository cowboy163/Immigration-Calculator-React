import Container from "../../utility/Container/Container";
import StyledSamplePage from "./SamplePage.styled";

const SamplePage = ({children}) => {
    return(
        <StyledSamplePage>
            <Container>
                <div className="page">
                    <h1>
                        {children}
                    </h1>
                </div>
            </Container>
        </StyledSamplePage>
    )
}
export default SamplePage