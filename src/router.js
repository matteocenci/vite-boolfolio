import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';

export const router = createRouter({
    routes: [
        {
            path: "/",
            name: 'home',
            component: Home
        },
        {
            path: "/about",
            name: "about"
            component: AboutUs
        }
    ]
})