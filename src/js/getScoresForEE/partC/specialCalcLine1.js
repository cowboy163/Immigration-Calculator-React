import csvToArray from "../../csvToArray";

const specialCalcLine1 = (education, clb, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            const name = Object.keys(rules[0])
            let nameIndex = -1

            // check clb to ensure which nameIndex use
            clb.forEach(item => {
                if(+item < 7) {
                    nameIndex = -2
                }
            })
            if(nameIndex === -1) {
                clb.forEach(item => {
                    if(+item < 9) {
                        nameIndex = 1
                    }
                })
            }
            if(nameIndex === -1) {
                nameIndex = 2
            }



        })
}
export default specialCalcLine1