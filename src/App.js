// project import
import { Routes, Route } from 'react-router-dom';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Login from 'pages/authentication/Login';
import MainLayout from 'layout/MainLayout/index';
import Register from 'pages/authentication/Register';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<MainLayout />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
