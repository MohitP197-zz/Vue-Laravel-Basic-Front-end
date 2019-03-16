import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)

    import App from './components/App'
    import Welcome from './components/Welcome'
    import Page from './components/Page'
    import About from './components/About'
    import Contact from './components/Contact'

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                name: 'welcome',
                component: Welcome,
                props: { title: "This is the SPA Home page" }
            },
            {
                path: '/about',
                name: 'about',
                component: Welcome,
                props: { title: "This is the About Page" }
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
                props: { title: "This is the Contact page" }
            },
            {
                path: '/spa-page',
                name: 'page',
                component: Page,
                props: { 
                    title: "This is the SPA Developer Page",
                    developer : {
                        name : "Mohit Paudel",
                        role : "Web-Developer",
                        code : "Keep coding!!"
                    }
                }
            },    
        ],
    })
    const app = new Vue({
        el: '#app',
        components: { App },
        router,
    });