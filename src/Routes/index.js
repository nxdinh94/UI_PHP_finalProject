import configRoutes from '~/config/routes';

import Home from '~/Pages/Home';
import Service from '~/Pages/Service';
import ServiceDetail from '~/Pages/ServiceDetail';
import Contact from '~/Pages/Contact';
import News from '~/Pages/News';
import Login from '~/Pages/Login';
import Register from '~/Pages/Register';
import NewsDetail from '~/Pages/NewsDetail';
import Admin from '~/Pages/Admin';
import Profile from '~/Pages/Profile';
import Store from '~/Pages/Store';
import StoreDetail from '~/Pages/StoreDetail';
import Gallery from '~/Pages/Gallery/';
import Team from '~/Pages//Team';
import TeamDetail from '~/Pages/TeamDetail';
import Page404 from '~/Pages/Page404';
import Cart from '~/Pages/Cart';
import Payment from '~/Pages/Payment';
const publicRoutes = [
    { path: configRoutes.home, component: Home, isHome: true },
    { path: configRoutes.services, component: Service },
    { path: configRoutes.servicesDetail, component: ServiceDetail },
    { path: configRoutes.contact, component: Contact },
    { path: configRoutes.news, component: News },
    { path: configRoutes.login, component: Login },
    { path: configRoutes.register, component: Register },
    { path: configRoutes.newsDetail, component: NewsDetail },
    { path: configRoutes.newsCategory, component: News },
    { path: configRoutes.admin, component: Admin, isAdmin: true },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.store, component: Store },
    { path: configRoutes.storeDetail, component: StoreDetail },
    { path: configRoutes.gallery, component: Gallery },
    { path: configRoutes.team, component: Team },
    { path: configRoutes.teamCategory, component: Team },
    { path: configRoutes.teamDetail, component: TeamDetail },
    { path: configRoutes.page404, component: Page404, isPage404: true },
    { path: configRoutes.cart, component: Cart },
    { path: configRoutes.payment, component: Payment },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
