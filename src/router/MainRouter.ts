import ContactView from "../views/ContactView.vue";
import FormationView from "../views/FormationView.vue";
import MainView from "../views/MainView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { path: '/about_me', component: MainView },
      { path: '/projects', component: ProjectsView },
      { path: '/experience', component: ExperienceView },
      { path: '/formation', component: FormationView },
      { path: '/contact', component: ContactView },
      { path: '/:pathMatch(.*)*', redirect: '/about_me' },
    ],
  })

