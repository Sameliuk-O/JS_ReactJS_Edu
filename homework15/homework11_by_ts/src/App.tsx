import {Route, Routes} from "react-router-dom";

import {User} from "./pages/user/User";
import {AllToDos} from "./pages/allToDos/AllToDoes";
import {ToDo} from "./pages/todo/ToDo";

import './App.css';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AllToDos/>}/>
                <Route path="/users/:idUser" element={<User/>}/>
                <Route path="/users/:idUser/todo/:idToDo" element={<ToDo/>}/>
            </Routes>
        </div>
    );
}

export default App;
