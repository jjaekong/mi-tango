import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/User/Home.js';
import Login from './views/User/Login.js';
import { useAuth } from './contexts/AuthContext.js';
import NewMilonga from './views/User/NewMilonga.js';
import Milonga from './views/User/Milonga.js';
import { MilongaProvider } from './contexts/MilongaContext.js';

// Admin 컴포넌트를 lazy 로딩 방식으로 불러옵니다.
const Dashboard = lazy(() => import('./views/Admin/Dashboard.js'));

function App() {

    const { currentUser } = useAuth();

    return (
        <Router>
            <Suspense fallback={<div className='h-dvh fixed inset-0 flex items-center justify-center'>Loading...</div>}> {/* 로딩 중 표시할 컴포넌트 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={currentUser ? <Navigate to="/"/> : <Login />} />
                    {/* 관리자 페이지 라우트 추가, lazy 로딩 적용 */}
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/new_milonga" element={currentUser ? <NewMilonga /> : <Navigate to="/login" />} />
                    <Route path="/milonga/:milongaId" element={<MilongaProvider><Milonga /></MilongaProvider>} />
                    {/* 404 페이지 처리 */}
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </Suspense>
        </Router>
        
    );
}

export default App;