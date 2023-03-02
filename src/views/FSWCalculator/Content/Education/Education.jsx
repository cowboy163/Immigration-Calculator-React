import SelectBar from "../../../../utility/SelectBar/SelectBar";
import {useDispatch} from "react-redux";
import {changeEducation} from "../../../../features/fswSlice/fswSlice";

const options = [
    {
        value: '0',
        text: '高中学历',
    },
    {
        value: '1',
        text: '1 年制高等教育学历（证书）',
    },
    {
        value: '2',
        text: '2 年制高等教育学历（大专）',
    },
    {
        value: '3',
        text: '3-4 年高等教育学历（高级大专/本科）',
    },
    {
        value: '4',
        text: '含有至少一个 3 年以上高等教育学历的（双学历）',
    },
    {
        value: '5',
        text: '硕士学位或专业学位（如医学博士）',
    },
    {
        value: '6',
        text: '博士学位（Ph.D.）',
    },
]

const content = {
    description: '—— 请选择您的最高学历 （海外学历需 ECA 认证） ——',
    options: options,
}

const Education = ({index}) => {
    const dispatch = useDispatch()
    const handleChange = val => {
        dispatch(changeEducation([val, index]))
    }
    return (
        <SelectBar content={content}
                   onChange={(evt) => {handleChange(evt.target.value)}}
        />
    )
}
export default Education