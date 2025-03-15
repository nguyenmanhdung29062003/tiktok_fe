//import all Component và chia ra public và private
import Home from '../pages/Home';
import Following from '../pages/Following';
import DefaultLayout from '../components/DefaultLayout';
import Upload from '../pages/Upload';
import HeaderOnlyLayout from '../components/HeaderOnlyLayout';
import Profile from '../pages/Profile';

//cái nào null là Fragment

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/@:nickname', component: Profile, layout: HeaderOnlyLayout },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
