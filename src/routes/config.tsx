import Home from "~/pages/home/Home"

export const paths = {
    home: "/",
}

export const routeConfig = [
    {
        id: 0,
        path: paths.home,
        element: <Home />
    }
]