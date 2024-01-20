import {  HashRouter, Route, Routes } from "react-router-dom"
import UseEffect from "./Components/UseEffect"
import Form from "./Components/Form"
import HomePage from "./Components/HomePage"
import NotFound from "./Components/NotFound"
import ProfilePage from "./Components/ProfilePage"


function App() {

  return (
    <>
     
        <Form />
        <UseEffect />

        <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage /> } />
          <Route path="*" element={<NotFound />} />

        </Routes>

        </HashRouter>

    </>
  )
}

export default App
