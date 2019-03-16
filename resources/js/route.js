import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)

    import App from './components/App'
    import Welcome from './components/Welcome'
    import Developer from './components/Developer'

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                name: 'welcome',
                component: Welcome,
                props: { title: "This is the SPA home" }
            },
            {
                path: '/spa-developer',
                name: 'developer',
                component: developer,
                props: { 
                    title: "This is the SPA Developer Page",
                    author : {
                        name : "Mohit Paudel",
                        role : "Web-Developer",
                        code : "Keey coding!!"
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