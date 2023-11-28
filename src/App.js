import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './components/Layout/HomeLayout';
import AnotherLayout from './components/Layout/AnotherLayout';
import EmptyLayout from './components/Layout/EmptyLayout';
import { publicRoutes } from './Routes';

function App() {
    let useData;
    let decentralization_id;
    if (sessionStorage.isLogin) {
        useData = JSON.parse(sessionStorage['user_data']);
        decentralization_id = useData.decentralization_id;
    }
    // console.log('fdsf', useData);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        if (route.path.includes('/admin')) {
                            if (decentralization_id == 2) {
                                return;
                            }
                        }
                        let Layout = AnotherLayout;
                        if (route.isHome) {
                            Layout = HomeLayout;
                        }

                        if (route.path.substring(0, 6) === '/admin') {
                            Layout = EmptyLayout;
                        }
                        if (route.isPage404) {
                            Layout = EmptyLayout;
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
