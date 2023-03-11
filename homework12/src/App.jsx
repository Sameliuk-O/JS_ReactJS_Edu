import {Route, Routes} from "react-router-dom";

import {StyledEngineProvider} from "@mui/material/styles";

import {Users} from "./pages/users";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Routes>
                <Route path="/" element={<Users/>}/>
            </Routes>
        </StyledEngineProvider>
    );
}

export default App;
