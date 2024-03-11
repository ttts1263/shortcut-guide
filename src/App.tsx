import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { HomePageTutorial } from "./pages/home/HomePageTutorial"
import { WindowsKey } from "./pages/windows/WindowsKey"
import { HomePageTutorialP2 } from "./pages/home/HomePageTutorialP2"
import { HomePageTutorialP3 } from "./pages/home/HomePageTutorialP3"
import { HomePageTutorialEnd } from "./pages/home/HomePageTutorialEnd"

// 페이지를 관리하는 라우터 역할

function App() {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <HomePageTutorial />,
    },
    {
      path: routes.windows,
      element: <WindowsKey />,
    },
    {
      path: routes.home2,
      element: <HomePageTutorialP2 />,
    },
    {
      path: routes.home3,
      element: <HomePageTutorialP3 />,
    },
    {
      path: routes.homeEnd,
      element: <HomePageTutorialEnd />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
