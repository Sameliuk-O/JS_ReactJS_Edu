import { Sidebar } from "../sidebar/Sidebar";

import "./layout.css"

export const Layout = ({ children }) => {
    return (
        <div>
            <Sidebar/>
            <div className={"layout"}>
                { children }
            </div>
        </div>
    )
}