import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {Routes, Route} from "react-router"
import Index from "./pages/index/Index"
import SignIn from "./pages/sign-in/sign-in"
import User from "./pages/user/user"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
        <main>
            <Routes>
                <Route>

                </Route>
                <Route>
                    
                </Route>
                <Route>
                
                </Route>
            </Routes>
        </main>
      <Footer />
    </Provider>
  </React.StrictMode>,
)
