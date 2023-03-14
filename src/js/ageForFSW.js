import csvToArray from "./csvToArray";
import fixAgeRange from "./fixAgeRange";
import rangeCheck from "./rangeCheck";

const getAgeScoreForFSW = async (val, ruleLocation) => {
    return csvToArray(ruleLocation).then(data => {
        if(!val) {
            return
        }
        let arrs = data.data
        let name = Object.keys(arrs[0])
        let index= -1
        console.log('arrs check ===> ', arrs)
        arrs.forEach((item, i) => {
            let range = fixAgeRange(item[name[0]])
            if(rangeCheck(range, val)) {
                index = i
            }
        })
        if(index >= 0) {
            return arrs[index][name[1]]
        }
        console.log("no result found in getAgeScoreForFSW()")
    })
}

export default getAgeScoreForFSW

