import configRoutes from '~/config/routes';

import Home from '~/Pages/Home';
import Service from '~/Pages/Service';
import Contact from '~/Pages/Contact';
import News from '~/Pages/News';
import Login from '~/Pages/Login';
import Register from '~/Pages/Register';
import NewsDetail from '~/Pages/NewsDetail';
import Admin from '~/Pages/Admin';
import Profile from '~/Pages/Profile';
import Store from '~/Pages/Store';
import Gallery from '~/Pages/Gallery';
import Team from '~/Pages//Team';
import Page404 from '~/Pages/Page404';
const publicRoutes = [
    { path: configRoutes.home, component: Home, isHome: true },
    { path: configRoutes.services, component: Service },
    { path: configRoutes.contact, component: Contact },
    { path: configRoutes.news, component: News },
    { path: configRoutes.login, component: Login },
    { path: configRoutes.register, component: Register },
    { path: configRoutes.newsDetail, component: NewsDetail },
    { path: configRoutes.newsCategory, component: News },
    { path: configRoutes.admin, component: Admin, isAdmin: true },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.store, component: Store },
    { path: configRoutes.gallery, component: Gallery },
    { path: configRoutes.team, component: Team },
    { path: configRoutes.page404, component: Page404, isPage404: true },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
