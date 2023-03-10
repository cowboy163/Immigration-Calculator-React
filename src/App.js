import {Route, Routes} from "react-router-dom";
import SharedLayout from "./views/SharedLayout/SharedLayout";
import HomeView from "./views/Home/HomeView";
import NoMatchView from "./views/NoMatch/NoMatchView";
import FSWCalcView from "./views/FSWCalc/FSWCalcView";
import EECalcView from "./views/EECalc/EECalcView";
import TestView from "./views/Test/TestView";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<HomeView/>}/>
                <Route path="/fswcalc" element={<FSWCalcView/>}/>
                <Route path="/eecalc" element={<EECalcView/>}/>
                <Route path="/test" element={<TestView/>}/>
                <Route path="*" element={<NoMatchView/>}/>
            </Route>
        </Routes>
    )
}
export default App