import { createRouter, createWebHistory } from 'vue-router';
import OverviewView from '@/views/OverviewView.vue';
import CreateView from '@/views/CreateView.vue';
import OrderView from '@/views/OrderView.vue';
import EditView from "@/views/EditView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/overview',
            name: 'overview',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: OverviewView
        },
        {
            path: '/create',
            name: "create",
            component: CreateView
        },
        {
            path: "/order",
            name: "order",
            component: OrderView
        },
        {
            path: "/edit/:index",
            name: "edit",
            component: EditView
        }
    ]
})

export default router
