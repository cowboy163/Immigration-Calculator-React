import StyledSubTable from "../../../../../../components/StyledSubTable/StyledSubTable";
import LangOptions from "./LangOptions/LangOptions";
import Input from "../../../../../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {changeTestScore} from "../../../../../../features/fswSlice/fswSlice";

const options = [
    {
        text: "阅读",
        name: "reading",
    },
    {
        text: "写作",
        name: "writing",
    },
    {
        text: "听力",
        name: "listening",
    },
    {
        text: "口语",
        name: "speaking",
    },

]

const LangDetails = ({index}) => {
    const dispatch = useDispatch()
    const value = useSelector(state => state?.fswCalc?.language?.testScore)

    const handleChange = (evt, inx) => {
        let value = evt.target.value
        dispatch(changeTestScore([value, index, inx]))
    }

    return(
        <StyledSubTable bgColor="transparent"
                        borderFix={true}
        >
            <tbody>
                <tr>
                    <td colSpan={options.length}>
                        <LangOptions index={index}/>
                    </td>
                </tr>
                <tr>
                    {
                        options.map((item, index) =>
                            <td key={index}>
                                {item.text}
                            </td>
                        )
                    }
                </tr>
                <tr>
                    {
                        options.map((item, index) =>
                            <td key={index}>
                                <Input name={item.name}
                                       onChange={(evt) => handleChange(evt, index)}
                                       value={value[index]}
                                />
                            </td>
                        )
                    }
                </tr>
            </tbody>
        </StyledSubTable>
    )
}
export default LangDetails