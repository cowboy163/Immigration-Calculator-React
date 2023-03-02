/*
 * interface content {title: string, content: () => ReactNode}
 * interface data {header: string, body: Array<content>, part?: string, other?: () => ReactNode}
 */
import MainCont from "./MainCont/MainCont";
import SecScore from "./SecScore/SecScore";
import CalcOther from "./CalcOther/CalcOther";

const CalcTable= ({data, subScore, secScore}) => {
    const {header, body, part, other} = data
    return(
        <div>
            <MainCont header={header} body={body} subScore={subScore}/>
            {
                part && <SecScore part={part} secScore={secScore}/>
            }
            {
                other && <CalcOther other={other}/>
            }
        </div>
    )
}

export default CalcTable