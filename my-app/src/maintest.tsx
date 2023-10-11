import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
// import "./index.css"
import "./main.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/index/Index"
import SignIn from "./pages/sign-in/sign-in"
import User from "./pages/user/user"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
        <main>
          <RouterProvider router={router} />
        </main>
      <Footer />
    </Provider>
  </React.StrictMode>,
)
