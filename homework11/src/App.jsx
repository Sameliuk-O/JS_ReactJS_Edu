import { Route, Routes } from "react-router-dom";

import { User } from "./pages/user";
import { AllTodos } from "./pages/allTodos";
import { Todo } from "./pages/todo";
import { ErrorPage } from "./pages/errorPage";

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/" element={<AllTodos/>}/>
                <Route path="/users/:idUser" element={<User/>}/>
                <Route path="/users/:idUser/todo/:idTodo" element={<Todo/>}/>
            </Routes>
        </div>
    );
}

export default App;
