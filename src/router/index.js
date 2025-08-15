import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import CompanySetupView from "../views/CompanySetupView.vue";

const routes = [
    {path: '/', name: 'dashboard', component: Dashboard},

    // Setup Routes
    {path: '/company-setup', name: 'company-setup', component: CompanySetupView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;