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
import SignIn from "./pages/sign-in/Sign-in"
import User from "./pages/user/User"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
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
        <Header />
        <User />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);