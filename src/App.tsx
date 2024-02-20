import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { HomePageTutorial } from "./pages/home/HomePageTutorial"

// 페이지를 관리하는 라우터 역할

function App() {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <HomePageTutorial />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
