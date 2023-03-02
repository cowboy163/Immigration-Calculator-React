const NumInput = (val, limitLength) => {
    // leave 0 only once
    val = val.replace(/^0{2,}/, "0")
    // number only
    val = val.replace(/[^\d]/g, "")
    // 2 digit only
    val = val.slice(0, limitLength)
    return val
}

export {NumInput}