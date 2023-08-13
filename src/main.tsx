import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import StatisticsPage from './pages/games/statistics-page/statistics-page.js';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "12771",
    element: <StatisticsPage gameId={12771}/>,
  },
  {
    path: "12915",
    element: <StatisticsPage gameId={12915}/>,
  },
  {
    path: "12939",
    element: <StatisticsPage gameId={12939}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
