import { lazy } from "react";
import Home from "../../views/Home";
import Example from "../../views/Example";

const routes = [
    {
        route : '/home',
        component : <Home/>,
    },
    {
        route : '/example',
        component : <Example/>,
    },
    {
        route : '*',
        component : <Home/>,
    }
]

export { routes}