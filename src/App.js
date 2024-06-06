import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Admin from './components/Admin.js'; // 관리자 컴포넌트 임포트

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} /> {/* 관리자 페이지 라우트 추가 */}
            </Routes>
        </Router>
    );
}

export default App;