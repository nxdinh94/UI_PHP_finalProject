import configRoutes from '~/config/routes';

import Home from '~/Pages/Home';
import Service from '~/Pages/Service';
import Contact from '~/Pages/Contact';
import News from '~/Pages/News';
import Handbook from '~/Pages/Handbook';

const publicRoutes=[
    {path: configRoutes.home, component: Home, isHome: true},
    {path: configRoutes.services, component:Service },
    {path: configRoutes.contact, component: Contact},
    {path: configRoutes.news, component: News},
    {path: configRoutes.handbook, component: Handbook},
];
const privateRoutes=[];
export {publicRoutes, privateRoutes};