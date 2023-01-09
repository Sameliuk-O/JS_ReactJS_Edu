import {Sidebar} from "../sidebar/Sidebar";
import "./Outlet.css"

export const Layout = ({children}) => {
    return(
        <div className="Layout">
            <Sidebar />
            <div className={"Outlet"}>
                {children}
            </div>
        </div>
    )
}