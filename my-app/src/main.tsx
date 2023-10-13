import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./main.css"

//Components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Index from "./pages/index/Index"
import SignIn from "./pages/sign-in/Sign-in"
import User from "./pages/user/User"
import Edit from "./pages/user/edit/edit"
import StoreHandler from "./components/storeHandler/Storehandler"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <StoreHandler />
        <Header />
        <Index />
        <Footer />
      </>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <>
        <StoreHandler />
        <Header />
        <SignIn />
        <Footer />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <StoreHandler />
        <Header />
        <User />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/edit",
    element: (
      <>
        <StoreHandler />
        <Edit />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
