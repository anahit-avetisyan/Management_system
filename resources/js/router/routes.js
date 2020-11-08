const Register = () => import('../pages/auth/register').then(m => m.default || m)
const Login = () => import('../pages/auth/login').then(m => m.default || m)
const Home = () => import('../pages/home').then(m => m.default || m)
const Tasks = () => import('../pages/tasks/index').then(m => m.default || m)
const Developers = () => import('../pages/auth/index').then(m => m.default || m)
const Slider = () => import('../pages/tasks/slider').then(m => m.default || m)
export default [
    { path: '/', redirect: { name: 'home' } },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/tasks', name: 'task', component: Tasks },
    { path: '/developers', name: 'developers', component: Developers },
    { path: '/home', name: 'home', component: Home },
    { path: '/slider', name: 'slider', component: Slider },

]
