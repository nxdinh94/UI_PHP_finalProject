import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './components/Layout/HomeLayout';
import AnotherLayout from './components/Layout/AnotherLayout';
import AdminLayout from './components/Layout/AdminLayout';
import { publicRoutes } from './Routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = AnotherLayout;
                        if (route.isHome) {
                            Layout = HomeLayout;
                        }

                        if (route.path.substring(0, 6) === '/admin') {
                            Layout = AdminLayout;
                        }

                        let Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
