import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'vi',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
        en: {
            translation: {
                home: 'Home',
                service: 'Service',
                handbook: 'Handbook',
                news: 'News',
                contact: 'Contact',
                slogan: 'We all love pet!!!',
                slogan2: "I'm always available to take care of your pets!",
                idiom: 'A dog is the only thing on earth that loves you more than it loves itself - Josh Billings',
                contactnow: 'Contact now',
                page: 'Page',
                store: 'store',
                gallery: 'gallery',
                team: 'team',
                servicePage: {
                    title: 'Services',
                },
                contactPage: {
                    title: 'Contact',
                },
            },
        },
        vi: {
            translation: {
                home: 'Trang chủ',
                service: 'Dịch vụ',
                handbook: 'Cẩm nang',
                news: 'Tin tức',
                contact: 'Liên hệ',
                slogan: 'Chúng ta yêu thú cưng !!!',
                slogan2: 'Tôi luôn sẵn sàng chăm sóc thú cưng của bạn!',
                idiom: 'Chó là điều duy nhất trên trái đất yêu bạn hơn yêu chính nó - Josh Billings',
                contactnow: 'Liên hệ ngay',
                page: 'Trang',
                store: 'Cửa hàng',
                gallery: 'Thư viện',
                team: 'Đội ngũ',
                servicePage: {
                    title: 'Dịch vụ',
                },
                contactPage: {
                    title: 'Liên hệ',
                },
            },
        },
    },
});

export default i18n;
