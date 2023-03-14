import getRuleLocation from "../getRuleLocation";
import getCLB from "./getCLB";

const getLanguageScore = (language) => {
    if(language.test) {
        // test
        // console.log('language check', language)
        const dir = ['EE', language.selected, language.test]
        const ruleLocation = getRuleLocation(dir)
        // test
        // console.log('rule location check', ruleLocation)
        getCLB(language, ruleLocation)

    }
}
export default getLanguageScore