import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { HomePage } from "./pages/home/HomePageTutorial"
import { WindowsPage } from "./pages/windows/WindowsKey"
import { HomePageTutorialP2 } from "./pages/home/HomePageTutorialP2"
import { HomePageTutorialP3 } from "./pages/home/HomePageTutorialP3"
import { HomePageTutorialEnd } from "./pages/home/HomePageTutorialEnd"
import { KeywordPage } from "./pages/keyword/KeywordPage"
import { WebBrowserKey } from "./pages/webbrowser/WebBrowserKey"

// 페이지를 관리하는 라우터 역할

function App() {
  const router = createBrowserRouter(
    [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.windows,
        element: <WindowsPage />,
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
      {
        path: routes.keyword,
        element: <KeywordPage />,
      },
      {
        path: routes.webbrowser,
        element: <WebBrowserKey />,
      },
    ],
    {
      basename: "/shortcut-guide",
    }
  )

  return <RouterProvider router={router} />
}

export default App
