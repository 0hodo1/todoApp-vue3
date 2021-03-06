import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddTodo from "../views/AddTodo.vue";
import UpdateTodo from "../views/UpdateTodo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addtodo",
    name: "AddTodo",
    component: AddTodo,
  },
  {
    path: "/updatetodo/:id",
    name: "UpdateTodo",
    component: UpdateTodo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
