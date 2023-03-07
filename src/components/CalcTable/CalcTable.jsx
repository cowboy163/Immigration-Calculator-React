/*
 * interface content {title: string, content: () => ReactNode}
 * interface data {header: string, body: Array<content>, part?: string, other?: () => ReactNode}
 */
import MainCont from "./MainCont/MainCont";
import SecScore from "./SecScore/SecScore";
import CalcOther from "./CalcOther/CalcOther";

const CalcTable= ({data, subScore, secScore, other}) => {
    const {header, body, part, extra} = data
    return(
        <div>
            <MainCont header={header} body={body} subScore={subScore} extra={extra}/>
            {
                part && <SecScore part={part} secScore={secScore}/>
            }
            {
                other?.content?.options[0]?.text && <CalcOther other={other}/>
            }
        </div>
    )
}

export default CalcTable