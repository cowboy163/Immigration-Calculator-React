import csvToArray from "../csvToArray";
import fixLanguageRange from "../getLanguageScoreForFSW/fixLanguageRange";

const getCLB = (language, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            // test
            console.log('data check', rules)
            let CLB = []
            const name = Object.keys(rules[0])
            const score = language.testScore
            const arrangedScore = [score[2], score[0], score[1], score[3]]
            // test
            // console.log('name check ===> ', name, arrangedScore)
            rules.forEach((item, index) => {
                arrangedScore.forEach((test, i) => {
                    let testIndex = i + 1
                    if(index === 0) {
                        let range = fixLanguageRange(item[name[testIndex]])
                        // test
                        // console.log('range check', range)
                        if(+test >= +range[0]) {
                            CLB[i] = fixLanguageRange(item[name[0]])
                        }
                    } else if (index === rules.length - 1) {
                        let range = fixLanguageRange(item[name[testIndex]])
                        if(+test < range[0]) {

                        }

                    }
                })
            })
            console.log('CLB check ===>', CLB)
        })
}
export default getCLB