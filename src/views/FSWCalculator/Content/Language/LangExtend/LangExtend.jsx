import LangDetails from "./LangDetails/LangDetails";
import OtherLang from "./OtherLang/OtherLang";

const LangExtend = ({index}) => {
    return (
        <div>
            <LangDetails index={index}/>
            <OtherLang index={index}/>
        </div>
    )
}
export default LangExtend