import {useRoutes} from "react-router-dom";

import {HomePage} from "./page/HomePage";
import {Card} from "./page/Card";
import {ErrorPage} from "./page/ErrorPage";

import './App.css';

function App() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: `/story/:storiesId`,
      element: <Card/>
    },
    {
      path: '*',
      element: <ErrorPage/>
    }
  ]);
}

export default App;
