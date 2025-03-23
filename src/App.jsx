import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Productlist from './components/Productlist'
import BookIntroduction from './pages/BookIntroduction'
function App() {
  return (
    <BrowserRouter> {/* 設定路由的根組件 */}
      <Routes> {/* 定義所有路由 */}
        <Route path="/" element={<Home />} /> {/* 首頁路由 */}
        <Route path="/productlist" element={<Productlist />} /> {/* 書籍列表頁面路由 */}
        <Route path="/BookIntroduction/:id" element={<BookIntroduction />} /> {/* 書籍介紹頁面路由，根據 id 顯示對應書籍 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
