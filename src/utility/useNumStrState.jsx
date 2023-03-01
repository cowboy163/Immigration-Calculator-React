// import {useState} from "react";
//
// const useNumStrState = (defaultVal="") => {
//     const [numVal, setNumVal] = useState(defaultVal)
//
//     const handleChange = val => {
//         // leave 0 only once
//         val = val.replace(/^0{2,}/,"0")
//         // number only
//         val = val.replace(/[^\d]/g,"")
//         // 2 digit only
//         val = val.slice(0,2)
//         setNumVal(val)
//     }
//
//     return [numVal, handleChange]
// }
//
// export default useNumStrState