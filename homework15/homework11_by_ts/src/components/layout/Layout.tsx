import {Sidebar} from "../sidebar/Sidebar";
import "./Outlet.css"

export const Layout = ({children}: {children: string | JSX.Element | JSX.Element[]}) => {
    return(
        <div className="Layout">
            <Sidebar />
            <div className={"Outlet"}>
                {children}
            </div>
        </div>
    )
}