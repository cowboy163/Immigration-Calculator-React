// import Language from "../../../../components/CalcTable/contents/Language/Language";
// import {useDispatch, useSelector} from "react-redux";
// import {
//     changeLanguage,
//     changeOtherLang, changeOtherLangScore,
//     changeOtherLangTest,
//     changeScore,
//     changeTest
// } from "../../../../features/eeSlice/eeSlicePartB";
// import {languageDataPartB, otherLanguageSelectionPartB} from "../../../../data/eeCalc/PartB/languageDataPartB";
//
// const LanguageView = ({lineIndex}) => {
//     const dispatch = useDispatch()
//
//     // language-top data
//     const langSelected = useSelector(state => state?.eeCalcPartB?.language?.selected)
//     const langChange = evt => {
//         const val = evt.target.value
//         const index = lineIndex
//         const optionIndex = evt.target.attributes.index.value
//         dispatch(changeLanguage([val, index, optionIndex]))
//     }
//     const langTopData = {
//         content: languageDataPartB,
//         selected: langSelected,
//         onChange: langChange,
//     }
//
//     // test data
//     const testSelected = useSelector(state => state?.eeCalcPartB?.language?.test)
//     const langIndex = useSelector(state => state?.eeCalcPartB?.language?.optionIndex)
//     const testChange = evt => {
//         const val = evt.target.value
//         dispatch(changeTest(val))
//     }
//     const testOptions = languageDataPartB.options[+langIndex].test
//     const testChoiceData = {
//         content: {options: testOptions},
//         selected: testSelected,
//         onChange: testChange,
//     }
//     // score data
//     const scoreChange = evt => {
//         let val = evt.target.value
//         let inputIndex = evt.target.attributes.index.value
//         dispatch(changeScore([val, inputIndex]))
//     }
//     const score = useSelector(state => state?.eeCalcPartB?.language?.testScore)
//     const testScore = {
//         score,
//         scoreChange,
//     }
//     const testData = {
//         testChoiceData: testChoiceData,
//         testCategory: languageDataPartB.testCategory,
//         testScore,
//     }
//
//     // second language data
//     // const otherLangChoiceSelected = useSelector(state => state?.eeCalcPartB?.otherLang?.selected)
//     // const otherLangChoiceChange = evt => {
//     //     let val = evt.target.value
//     //     dispatch(changeOtherLang(val))
//     // }
//     // const otherLangChoice = {
//     //     content: {options: otherLanguageSelectionPartB},
//     //     selected: otherLangChoiceSelected,
//     //     onChange: otherLangChoiceChange,
//     // }
//     // const otherLangData = {
//     //     otherLangChoice,
//     //     otherLangChoiceSelected,
//     // }
//     // other language test choice
//     // const otherLangTestSelected = useSelector(state => state?.eeCalcPartB?.otherLang?.test)
//     // const otherLangTestChange = evt => {
//     //     const val = evt.target.value
//     //     dispatch(changeOtherLangTest(val))
//     // }
//     // let otherLangTestOptions = {}
//     // if (langIndex === "0") {
//     //     otherLangTestOptions = languageDataPartB.options[1].test
//     // } else {
//     //     otherLangTestOptions = languageDataPartB.options[0].test
//     // }
//     // const otherLangTestChoiceData = {
//     //     content: {options: otherLangTestOptions},
//     //     selected: otherLangTestSelected,
//     //     onChange: otherLangTestChange,
//     // }
//     // other language test score
//     // const otherLangScoreChange = evt => {
//     //     let val = evt.target.value
//     //     let inputIndex = evt.target.attributes.index.value
//     //     dispatch(changeOtherLangScore([val, lineIndex, inputIndex]))
//     // }
//     // const otherLangScore = useSelector(state => state?.eeCalcPartB?.otherLang?.testScore)
//     // const otherLangTestScore = {
//     //     score: otherLangScore,
//     //     scoreChange: otherLangScoreChange,
//     // }
//     // const otherLangTestData = {
//     //     testChoiceData: otherLangTestChoiceData,
//     //     testCategory: languageDataPartB.testCategory,
//     //     testScore: otherLangTestScore,
//     // }
//
//     const langData = {
//         langTopData,
//         testData,
//         // otherLangData,
//         // otherLangTestData,
//     }
//
//     return (
//         <Language langData={langData} secondLangNotShow={true}/>
//     )
// }
// export default LanguageView