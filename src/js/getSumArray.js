const getSumArray = arr => {
    let sum = 0
    let flag = false
    arr.forEach(item => {
        if(item) {
            sum += +item
            flag = true
        }
    })
    return flag? String(sum) : ""
}
export default getSumArray