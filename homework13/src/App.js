import logo from './logo.svg';
import './App.css';
import {useRoutes} from "react-router-dom";
import {HomePage} from "./page/HomePage";
import {Card} from "./page/Card";

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: `/story/:storiesId`,
      element: <Card/>
    }
  ])

  return elements;
}

export default App;
