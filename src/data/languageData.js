const testCategory = ["阅读", "写作", "听力", "口语"]

const engTest = [
    {
        text: "雅思G类（IELTS - General）",
        value: "ielts",
        group: "englishTest",
    },
    {
        text: "思培（CELPIP）",
        value: "celpip",
        group: "englishTest",
    },
]

const frTest = [
    {
        text: "TEF Canada",
        value: "tef",
        group: "frenchTest",
    },
    {
        text: "TCF Canada",
        value: "tcf",
        group: "frenchTest",
    },
]

const languageOption = [
    {
        text: "英语",
        value: "english",
        group: "language",
        test: engTest,
    },
    {
        text: "法语",
        value: "french",
        group: "language",
        test: frTest,
    }
]

const languageData = {
    options: languageOption,
    testCategory,
}


export {
    languageData,
}