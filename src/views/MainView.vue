<template>
  <div class="max-w-4xl mx-auto text-left space-y-12 animate-fadein">
    <section class="flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Samuel Pérez Carballo
        </h1>
        <p class="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
          Desarrollador de Videojuegos & Aspirante a Fullstack Web
        </p>
        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Especializado en el desarrollo para <strong>Nintendo Switch</strong> en Nintai Studios. 
          Actualmente ampliando mis horizontes en el <strong>Desarrollo de Aplicaciones Web</strong>. 
          Mi objetivo es fusionar la interactividad de los videojuegos con la potencia de las tecnologías web modernas.
        </p>
        <div class="mt-6 flex gap-3">
        <RouterLink to="/contact">
          <Button label="Trabajemos juntos" icon="pi pi-envelope" class="!bg-gradient-to-r from-blue-600 to-indigo-600 !border-0 !rounded-xl px-6 py-3 !text-white font-bold shadow-lg shadow-blue-500/30 transform hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300" />
        </RouterLink>
          <RouterLink to="/projects">
            <Button label="Ver Proyectos" icon="pi pi-th-large" severity="secondary" variant="outlined" />
          </RouterLink>
        </div>
      </div>
      <div class="flex-1 w-full">
        <img 
          class="rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 transform hover:scale-105 transition-transform duration-300" 
          src="../assets/images/Main_page_image.webp" 
          alt="Desarrollo Web y Videojuegos"
        >
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card class="hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
        <template #title>🕹️ Proyectos Destacados</template>
        <template #content>
          <p class="mb-4">Experiencia en títulos para Switch como <strong>Torched</strong>.</p>
          <RouterLink to="/projects" class="text-blue-500 font-bold flex items-center gap-2 hover:underline">
            Explorar catálogo <i class="pi pi-arrow-right text-sm"></i>
          </RouterLink>
        </template>
      </Card>

      <Card class="hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
        <template #title>💼 Trayectoria</template>
        <template #content>
          <p class="mb-4">De prácticas en Teidagua a desarrollador profesional en <strong>Nintai Studios</strong>.</p>
          <RouterLink to="/experience" class="text-blue-500 font-bold flex items-center gap-2 hover:underline">
            Ver experiencia <i class="pi pi-arrow-right text-sm"></i>
          </RouterLink>
        </template>
      </Card>

      <Card class="hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
        <template #title>🎓 Educación</template>
        <template #content>
          <p class="mb-4">Especializado en SMR, DAM y actualmente cursando <strong>DAW</strong>.</p>
          <RouterLink to="/formation" class="text-blue-500 font-bold flex items-center gap-2 hover:underline">
            Ver estudios <i class="pi pi-arrow-right text-sm"></i>
          </RouterLink>
        </template>
      </Card>

      <Card class="bg-blue-50 dark:bg-slate-800/50 border-dashed border-2 border-blue-200 dark:border-blue-900">
        <template #title>📧 Hablemos</template>
        <template #content>
          <p class="mb-4">¿Buscas un desarrollador con pasión por el código limpio y los retos?</p>
          <RouterLink to="/contact">
            <Button label="Enviar mensaje" icon="pi pi-comment" severity="info" text raised />
          </RouterLink>
        </template>
      </Card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';
</script>