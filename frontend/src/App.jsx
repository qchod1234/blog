import './App.css'
import { Routes, Route } from 'react-router-dom'

import TopNav from "./components/common/top/TopNav.jsx"
import ScrollLine from './components/common/top/ScrollLine.jsx';

import Home from "./pages/Home"
import About from "./pages/About"
import Archive from "./pages/Archive"
import Board from "./pages/Board"
import Post from "./pages/Post.jsx";

function App() {

    return (
        <>
            <ScrollLine/>
            <TopNav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/archive' element={<Archive/>}/>

                <Route path='/post' element={<Post/>}/>
                <Route path='/board' element={<Board/>}/>
            </Routes>
        </>
    )
}

export default App
