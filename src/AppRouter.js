import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Pie from "./Pages/Pie"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/custom" element={<Pie/>} />
            </Routes>
        </BrowserRouter>
    )
}