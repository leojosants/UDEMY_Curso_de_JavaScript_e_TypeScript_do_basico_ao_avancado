import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './components/Home'
import { About } from './components/About';
import { Post } from './components/Post';
import { Redirect } from './components/Redirect';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
