import configRoutes from '~/config/routes';

import Home from '~/Pages/Home';
import Service from '~/Pages/Service';
import Contact from '~/Pages/Contact';
import News from '~/Pages/News';
import Handbook from '~/Pages/Handbook';
import Login from '~/Pages/Login';
import Register from '~/Pages/Register';
import NewsDetail from '~/Pages/NewsDetail';
import Admin from '~/Pages/Admin';
import Profile from '~/Pages/Profile';

const publicRoutes = [
    { path: configRoutes.home, component: Home, isHome: true },
    { path: configRoutes.services, component: Service },
    { path: configRoutes.contact, component: Contact },
    { path: configRoutes.news, component: News },
    { path: configRoutes.handbook, component: Handbook },
    { path: configRoutes.login, component: Login },
    { path: configRoutes.register, component: Register},
    { path: configRoutes.newsDetail, component: NewsDetail },
    { path: configRoutes.newsCategory, component: News },
    { path: configRoutes.admin, component: Admin },
    { path: configRoutes.profile, component: Profile },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
