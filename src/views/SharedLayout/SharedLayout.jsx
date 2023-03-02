import HeaderView from "./Header/HeaderView";
import FooterView from "./Footer/FooterView";
import {Outlet} from "react-router-dom";

const SharedLayout = () => {
    return(
        <>
            <HeaderView/>
            <Outlet/>
            <FooterView/>
        </>
    )
}
export default SharedLayout