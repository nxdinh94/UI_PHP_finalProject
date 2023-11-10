
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './components/Layout/HomeLayout';
import AnotherLayout from './components/Layout/AnotherLayout';
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
                        let Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout isloginPage={route.loginPage}>
                                        <Page/>
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
