import MainWeb from "../page/App/MainWeb"
import Login from "../page/Login/Login"




export const priavteRouter =[
    {
        path: "/",
        element: <MainWeb/>,
    }
]

export const pulicRouter = [
    {
        path: "/",
        element: <Login/>,
    }
]