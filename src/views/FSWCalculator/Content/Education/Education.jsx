import SelectBar from "../../../../components/SelectBar/SelectBar";

const options = [
    {
        value: '',
        text: '高中学历',
    },
    {
        value: '',
        text: '1 年制高等教育学历（证书）',
    },
    {
        value: '',
        text: '2 年制高等教育学历（大专）',
    },
    {
        value: '',
        text: '3-4 年高等教育学历（高级大专/本科）',
    },
    {
        value: '',
        text: '含有至少一个 3 年以上高等教育学历的（双学历）',
    },
    {
        value: '',
        text: '硕士学位或专业学位（如医学博士）',
    },
    {
        value: '',
        text: '博士学位（Ph.D.）',
    },
]

const content = {
    description: '—— 请选择您的最高学历 （海外学历需 ECA 认证） ——',
    options: options,
}

const Education = () => {
    return (
        <SelectBar content={content}/>
    )
}
export default Education