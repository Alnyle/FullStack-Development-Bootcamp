import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Root from "./routes/root";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import User from './components/User/User'
import ErrorPage from "./pages/ErrorPage";
import Github from "./components/Github/Github";
import { githubInfoLoader } from "./components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    // can write other routes inside this routes
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/> 

        {/* can write only one route inside this route */}
        <Route path="about" element={<About/>}/>
        <Route path="user/" element={<User/>}>
           <Route path=":userId" element={<User/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
        <Route loader={ githubInfoLoader } path="github" element={<Github/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
